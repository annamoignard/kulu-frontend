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
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/schedule">Timetable</NavLink>
      <NavLink to="/new-booking">New Booking</NavLink>
      <NavLink to="/" onClick={logout}>Logout</NavLink> 
      <NavLink to="/secrets">Secrets</NavLink> 
    </Nav>
  );
}