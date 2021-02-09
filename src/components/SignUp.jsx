import React, { useState } from "react";
import { LoggedOutNavbar } from "./LoggedOutNavbar.jsx";
import {
  Form,
  Title,
  Button,
  TextBox,
  Label,
  FormContainer,
} from "../styles/Form";
import { KuluLogo } from "../styles/Homepage";
import kululogo from "../assets/kululogo.png";

export function SignUp({ history }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onFormSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/sign-up`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: { username, email, password } }),
        }
      );
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/auth/sign-in`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ auth: { username, email, password } }),
          }
        );
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        history.push("/");
      }
    } catch (err) {}
  }

  return (
    <>
      <LoggedOutNavbar />
      <KuluLogo>
        <img src={kululogo} alt="kulu-logo" style={{ borderRadius: "50%" }} />
      </KuluLogo>
      <Title>Sign Up</Title>
      <FormContainer>
        <Form onSubmit={onFormSubmit}>
          <Label htmlFor="username">Username</Label>
          <TextBox
            type="username"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="email">Email</Label>
          <TextBox
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <TextBox
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button id="submit" type="submit" value="Submit" />
        </Form>
      </FormContainer>
    </>
  );
}
