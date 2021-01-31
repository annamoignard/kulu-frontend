import React from "react";
import { Link } from 'react-router-dom'; 

export function LoggedOutNavbar() {
  return (
    <nav>
      <Link to="/login"></Link>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  );
}