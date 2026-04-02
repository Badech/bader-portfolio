import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Work from "@/pages/Work";
import Process from "@/pages/Process";
import Contact from "@/pages/Contact";

describe("Main Routes Render", () => {
  it("renders homepage without crashing", () => {
    render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    );
  });

  it("renders About page without crashing", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );
  });

  it("renders Services page without crashing", () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>
    );
  });

  it("renders Work page without crashing", () => {
    render(
      <BrowserRouter>
        <Work />
      </BrowserRouter>
    );
  });

  it("renders Process page without crashing", () => {
    render(
      <BrowserRouter>
        <Process />
      </BrowserRouter>
    );
  });

  it("renders Contact page without crashing", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
  });
});
