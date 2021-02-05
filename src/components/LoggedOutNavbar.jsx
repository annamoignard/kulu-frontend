import React from "react";
import { Link } from 'react-router-dom'; 
import { Nav, NavLink } from '../styles/Nav';

export function LoggedOutNavbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </Nav>
  );
}