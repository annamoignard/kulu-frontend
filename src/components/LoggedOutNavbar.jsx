import React from "react";
import { Nav, NavLink } from '../styles/Nav';


// this is for users who are logged out. you need to sign in to view protected routes 
export function LoggedOutNavbar() {
  return (
    <Nav>
      {/* <NavLink to="/">Home</NavLink> */}
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </Nav>
  );
}