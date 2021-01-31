import React, { useState } from "react";
import { LoggedOutNavbar } from './LoggedOutNavbar.jsx';
import { Form } from '../styles/Form'; 

export function SignUp({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/auth/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { username, email, password } }),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch("http://localhost:3000/auth/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ auth: { username, email, password } }),
        });
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/newbooking");
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <LoggedOutNavbar />
      <h1>Sign Up</h1>
      <Form onSubmit={onFormSubmit}>
      <label htmlFor="username">Username</label>
        <input
          type="username"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </Form>
    </>
  );
}