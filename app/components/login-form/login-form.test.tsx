import { render, screen } from "@testing-library/react";
import LoginForm from "./login-form";

import userEvent from "@testing-library/user-event";

describe("Test for Login Form", () => {
  test("component renders", () => {
    render(<LoginForm />);
  });

  test("fill login details", () => {
    render(<LoginForm />);

    userEvent.type(screen.getByLabelText(/Email/i), "123@abc@.com");
    userEvent.type(screen.getByLabelText(/Password/i), "password");
    userEvent.click(screen.getByRole("button", { name: /Login/i }));
    
  });
});
