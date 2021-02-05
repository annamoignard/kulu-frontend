import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Bookings() {
  const [bookings, setBookings] = useState([]);

  function fetchBookings() {
    fetch("http://localhost:3000/bookings", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((body) => {
        setBookings(body.bookings);
      });
  }
  useEffect(() => {
    fetchBookings();
  }, []);

  async function onDeleteLinkClick(e, bookings) {
    try {
      e.preventDefault();
      if (window.confirm("Are you sure you want to delete?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/bookings/${bookings.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          }
        );
        fetchBookings();
      }
    } catch (err) {
    }
  }
  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map((booking) => {
        return (
          <div>
            <p>{booking.name}</p>
            <p>{booking.date}</p>
            <p>{booking.time}</p>
          </div>
        );
      })}
       <Link onClick={(e) => onDeleteLinkClick(e, bookings)}
      to={`/bookings/${bookings.id}`}>Cancel booking</Link>
    </div>
  );
}
