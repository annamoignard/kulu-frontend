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

<<<<<<< HEAD
  async function onDeleteLinkClick(e) {
    try {
      e.preventDefault();
      if (window.confirm("Do you want to drop the class?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/bookings/${bookings.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        fetchBookings();
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(bookings);
=======
  // async function onDeleteLinkClick(e, session) {
  //   try {
  //     e.preventDefault();
  //     if (window.confirm("Do you want to drop the class?")) {
  //       await fetch(`http://localhost:3000/bookings/${booking.id}`, {
  //         method: "DELETE",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       });
  //       fetchBookings();
  //     }
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
>>>>>>> 9d740d12743d51b9815c76d13837835e43fc3dbd
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
