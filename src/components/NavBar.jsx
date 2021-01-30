import React from "react";
import { useHistory, Link } from 'react-router-dom'; 
import { Nav, NavLink } from '../styles/Nav'; 

export function NavBar() {
  const history = useHistory()

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login")
  }

  return (
    <Nav>
      <NavLink to="/NewBooking">New Booking</NavLink>
      <NavLink to="/Schedule">Schedule</NavLink>
      <NavLink to="/Home">Home</NavLink>
      <NavLink to="/secrets">Secrets</NavLink> 
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </Nav>
  );
}