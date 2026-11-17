import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

import { describe, expect, it } from "vitest";

// js-yaml is already an installed application dependency; no new CI package.
const { load } = createRequire(import.meta.url)("js-yaml") as {
  load: (source: string) => unknown;
};

type WorkflowStep = {
  name?: string;
  run?: string;
  uses?: string;
  if?: string;
};
type Job = {
  name?: string;
  needs?: string;
  if?: string;
  permissions?: Record<string, string>;
  steps?: WorkflowStep[];
};
type Workflow = {
  name?: string;
  on?: {
    pull_request?: { branches?: string[] };
    push?: { branches?: string[] };
    workflow_dispatch?: unknown;
  };
  permissions?: Record<string, string>;
  jobs?: Record<string, Job>;
};

const workflow = load(
  readFileSync(new URL("../.github/workflows/nextjs.yml", import.meta.url), "utf8"),
) as Workflow;

function buildJob() {
  const job = workflow.jobs?.build;
  if (!job) throw new Error("CI build job is missing");
  return job;
}

function deployJob() {
  const job = workflow.jobs?.deploy;
  if (!job) throw new Error("Pages deployment job is missing");
  return job;
}

function findStep(job: Job, name: string) {
  const step = job.steps?.find((item) => item.name === name);
  if (!step) throw new Error(`Required CI step is missing: ${name}`);
  return step;
}

describe("portfolio CI delivery contract", () => {
  it("uses the one existing check name and no extra workflow jobs", () => {
    expect(workflow.name).toBe("Validate and deploy portfolio");
    expect(Object.keys(workflow.jobs ?? {}).sort()).toEqual(["build", "deploy"]);
    expect(buildJob().name).toBe("Validate and build");
  });

  it("validates pull requests on both branches without deploying from dev", () => {
    expect(workflow.on?.pull_request?.branches?.slice().sort()).toEqual(["dev", "main"]);
    expect(workflow.on?.push?.branches).toEqual(["main"]);
    expect(workflow.on && Object.hasOwn(workflow.on, "workflow_dispatch")).toBe(true);
  });

  it("runs locked install, lint, typecheck, tests, build, and high-severity audit", () => {
    const build = buildJob();
    expect(findStep(build, "Install dependencies").run).toBe("npm ci");
    expect(findStep(build, "Lint").run).toBe("npm run lint");
    expect(findStep(build, "Typecheck").run).toBe("npm run typecheck");
    expect(findStep(build, "Test").run).toBe("npm test");
    expect(findStep(build, "Build static site").run).toBe("npm run build");
    expect(findStep(build, "Audit dependencies").run).toBe("npm audit --audit-level=high");
  });

  it("separates read-only validation permissions from Pages deployment permissions", () => {
    expect(workflow.permissions).toBeUndefined();
    expect(buildJob().permissions).toEqual({ contents: "read" });
    expect(deployJob().permissions).toEqual({
      pages: "write",
      "id-token": "write",
    });
  });

  it("never publishes Pages artifacts or deploys from a pull request", () => {
    const build = buildJob();
    const deploy = deployJob();
    expect(findStep(build, "Upload Pages artifact").if).toBe(
      "github.event_name != 'pull_request'",
    );
    expect(deploy.needs).toBe("build");
    expect(deploy.if).toBe(
      "github.ref == 'refs/heads/main' && github.event_name != 'pull_request'",
    );
  });

  it("does not make SonarQube, SonarCloud, or CircleCI a required workflow job", () => {
    expect(JSON.stringify(workflow).toLowerCase()).not.toMatch(/sonarqube|sonarcloud|circleci/);
  });
});
