import React from "react";
import { useHistory } from 'react-router-dom'; 
import { Nav, NavLink } from '../styles/Nav'; 

export function NavBar() {
  const history = useHistory()

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/home") 
  }

  return (
    <Nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/schedule">Timetable</NavLink>
      <NavLink to="/" onClick={logout}>Logout</NavLink> 
    </Nav>
  );
}