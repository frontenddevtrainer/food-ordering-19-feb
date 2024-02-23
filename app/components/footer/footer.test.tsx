import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Example test footer", () => {
  test("render component", () => {
    render(<Footer />);
    expect(screen.getByText("About Us")).toBeInTheDocument()
  });
});
