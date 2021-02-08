import React, { useEffect, useState } from "react";
import { Button } from '../styles/Form';


export function Success(props) {
  const [booking, setBooking] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/bookings/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then((booking) => {
        setBooking(booking);
      });
  }, [id]);

  // dangerously semantic html 

  return (
    booking && (
      <>
        <div>
          <h2>Name: {booking.name}</h2>
          <p>Time: {booking.time}</p>
          <p>Day: {booking.day}</p>
          <p>Price: ${booking.cost}</p>
        </div>
        <Button to="/bookings">
          My Bookings
        </Button>
      </>
    )
  );
}
