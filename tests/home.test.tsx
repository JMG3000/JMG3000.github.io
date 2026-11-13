import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Home from "@/src/pages";

function renderHome() {
  return renderToStaticMarkup(
    <ChakraProvider value={defaultSystem}>
      <Home />
    </ChakraProvider>,
  );
}

describe("Home", () => {
  it("renders valid call-to-action links", () => {
    const html = renderHome();

    expect(html).toContain('href="/portfolio"');
    expect(html).toContain('href="mailto:jakeincbusinesssolutions@gmail.com"');
    expect(html).not.toMatch(/<a[^>]*>\s*<button/);
  });

  it("protects external new-tab links", () => {
    const html = renderHome();

    expect(html).toContain('href="https://github.com/JMG3000"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
