import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Example test footer", () => {
  test("render component", () => {
    render(<Footer />);
  });

  test("render component and year should 2024", () => {
    render(<Footer />);
    expect(
      screen.getByText("2024 Ordering App. All rights reserved.")
    ).toBeInTheDocument();
  });

  test("render component and year should 2025", () => {
    render(<Footer year="2025" />);
    expect(
      screen.getByText("2025 Ordering App. All rights reserved.")
    ).toBeInTheDocument();
  });

  test("verify links are present", () => {
    render(<Footer />);
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });
});
