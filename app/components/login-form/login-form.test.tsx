import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import LoginForm from "./login-form";
import userEvent from "@testing-library/user-event";

describe("Test for Login Form", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "Login successful" }),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("component renders", () => {
    render(<LoginForm />);
  });

  test("fill login details", async () => {
    render(<LoginForm />);

    userEvent.type(screen.getByLabelText(/Email/i), "123@abc.com");
    userEvent.type(screen.getByLabelText(/Password/i), "password");
    userEvent.click(screen.getByRole("button", { name: /Login/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });

  test("fetch error", async () => {
    render(<LoginForm />);

    fetch.mockImplementation(() => Promise.reject("API error"));

    userEvent.type(screen.getByLabelText(/Email/i), "123@abc.com");
    userEvent.type(screen.getByLabelText(/Password/i), "password");
    userEvent.click(screen.getByRole("button", { name: /Login/i }));

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledTimes(1);
    });
  });
});
