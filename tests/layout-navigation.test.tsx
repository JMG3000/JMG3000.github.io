import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Layout from "@/components/Layout";

function renderLayout() {
  return renderToStaticMarkup(
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <main>Page content</main>
      </Layout>
    </ChakraProvider>,
  );
}

describe("Current layout navigation", () => {
  it("includes the Research route and excludes the retired Tutorials route", () => {
    const html = renderLayout();

    expect(html).toContain('aria-label="Primary"');
    expect(html).toContain('href="/research"');
    expect(html).not.toContain('href="/tutorials"');
  });

  it("retains the footer contact links and safe external link attributes", () => {
    const html = renderLayout();

    expect(html).toContain('href="https://github.com/JMG3000"');
    expect(html).toContain('href="https://www.linkedin.com/in/jacobgarrett/"');
    expect(html).toContain('href="mailto:jakeincbusinesssolutions@gmail.com"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
