"use client";

import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState("pending");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      setStatus("started");
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      });
    } catch (error) {
      setStatus("error");
    } finally {
      setStatus("completed");
    }
  };

  return (
    <div className="p-10">
      <h3>Register</h3>
      <form onSubmit={submitHandler}>
        <p>
          <label>Email</label>
          <input
            className="text-black"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p>
          <label>Password</label>
          <input
            type="password"
            className="text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <label>Confirm Password</label>
          <input
            type="password"
            className="text-black"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </p>
        <button type="submit" className="">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;