"use client";

import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("pending");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      setStatus("started");
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
    } catch (error) {
      setStatus("error");
    } finally {
      setStatus("completed");
    }
  };

  return (
    <div className="p-10">
      <form onSubmit={submitHandler}>
        <h3>Login</h3>
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
            className="text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
