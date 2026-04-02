import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Contact from "@/pages/Contact";

describe("Core Components", () => {
  it("renders Navbar with brand name", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Bader")).toBeInTheDocument();
    expect(screen.getByText("Echchalh")).toBeInTheDocument();
  });

  it("renders Contact page with form fields", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByText("Send Inquiry")).toBeInTheDocument();
  });

  it("renders main CTAs in navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Request a Free Audit")).toBeInTheDocument();
  });
});
