import React from "react";
import { useHistory, Link } from 'react-router-dom'; 

export function NavBar() {
  const history = useHistory()

  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login")
  }

  return (
    <nav>
      <Link to="/NewBooking">New Booking</Link>
      <Link to="/Schedule">Schedule</Link>
      <Link to="/Home">Home</Link>
      <Link to="/secrets">Secrets</Link> 
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  );
}