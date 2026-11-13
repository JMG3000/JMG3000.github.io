import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Layout from "@/components/Layout";

function renderLayout() {
  return renderToStaticMarkup(
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <div>Body</div>
      </Layout>
    </ChakraProvider>,
  );
}

describe("Layout", () => {
  it("renders only implemented internal routes", () => {
    const html = renderLayout();

    expect(html).toContain('href="/"');
    expect(html).toContain('href="/portfolio"');
    expect(html).not.toContain("/tutorials");
  });

  it("does not render source comments or nested anchors", () => {
    const html = renderLayout();

    expect(html).not.toContain("change href");
    expect(html).not.toMatch(/<a[^>]*>\s*<a/);
  });

  it("protects external new-tab links", () => {
    const html = renderLayout();

    expect(html).toContain('rel="noopener noreferrer"');
  });
});
