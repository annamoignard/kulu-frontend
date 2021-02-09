import React, { useState } from "react";
import { LoggedOutNavbar } from './LoggedOutNavbar.jsx'
import { Form, Title, Button, TextBox, Label, FormContainer} from '../styles/Form'; 
import { KuluLogo } from '../styles/Homepage';
import kululogo from '../assets/kululogo.png';

export function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  
  async function onFormSubmit(event) {
    event.preventDefault();
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt, instructor } = await response.json();
        localStorage.setItem("token", jwt);
        if (instructor) {
          localStorage.setItem("instructor", instructor)
        }
        history.push("/");
      }
    } catch (err) {
      setErrMessage(err.message);
    }
  }

  return (
    <>
      <LoggedOutNavbar />
            <KuluLogo>
      <img src={kululogo} alt="kulu-logo" style={{ borderRadius: "50%" }} />
      </KuluLogo>
      <Title>Login</Title>
      <FormContainer>
      {errMessage && <span>{errMessage}</span>}
      <Form onSubmit={onFormSubmit}>
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
        <Button id="submit" type="submit" value="Submit"/>
      </Form>
      </FormContainer>
    </>
  );
}