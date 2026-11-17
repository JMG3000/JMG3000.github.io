import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import Portfolio from "@/src/pages/portfolio";

function renderPortfolio() {
  return renderToStaticMarkup(
    <ChakraProvider value={defaultSystem}>
      <Portfolio />
    </ChakraProvider>,
  );
}

describe("Portfolio", () => {
  it("presents real project work and a profile link", () => {
    const html = renderPortfolio();

    expect(html).toContain("Personal Site Modernization");
    expect(html).toContain("GitHub Profile");
    expect(html).toContain("https://github.com/JMG3000");
  });

  it("does not expose starter-template content", () => {
    const html = renderPortfolio();

    expect(html).not.toContain("Create Next App");
    expect(html).not.toContain("Portfolio is in construction");
    expect(html).not.toContain("next.svg");
  });
});
