import React, { useState, useEffect } from "react";
import { ScheduleCards, ScheduleContainer, Title } from "../styles/Schedule";
import { Link } from "react-router-dom";

export function ClientBookings() {
  const [clientbooking, setClientBooking] = useState([]);

  function fetchClientBookings() {
    fetch("http://localhost:3000/bookings/client", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(({ booking, client }) => {
        setClientBooking(booking);
      });
  }
  useEffect(() => {
    fetchClientBookings();
  }, []);

  async function onDeleteLinkClick(e, booking) {
    try {
      e.preventDefault();
      if (window.confirm("Do you want to drop the class?")) {
        await fetch(`http://localhost:3000/bookings/${booking.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        fetchClientBookings();
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <Title>Your Bookings</Title>
      <ScheduleContainer>
        {clientbooking && clientbooking.map((s) => {
            return (
              <ScheduleCards key={s.id}>
                <h2>{s.name}</h2>
                <p>{s.time}</p>
                <p>{s.instructor}</p>
                <Link
                  onClick={(e) => onDeleteLinkClick(e, s)}
                  to={`/booking/client/${s.id}`}
                >
                  Remove
                </Link>
                ){"}"}
              </ScheduleCards>
            );
          })}
      </ScheduleContainer>
    </>
  );
}
