import React, { useState, useEffect } from "react";
import {
  OuterCard,
  InnerCard,
  CardWrapper,
  CardLink
} from "../styles/NewBooking";
import { KuluLogo } from "../styles/Homepage";
import kululogo from "../assets/kululogo.png";

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

  async function onDeleteLinkClick(e, booking) {
    try {
      e.preventDefault();
      if (window.confirm("Do you want to delete this class?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/bookings/${booking.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        fetchBookings();
      }
    } catch (err) {}
  }
  return (
    <>
      <KuluLogo>
        <img src={kululogo} style={{ borderRadius: "50%" }} />
      </KuluLogo>
      <div>
        <h1>Your Kulu Bookings</h1>
        <CardWrapper>
          {bookings && bookings.map((booking) => {
            return (
              <OuterCard key={booking.id}>
                <InnerCard>
                  <p>{booking.name}</p>
                  <p>{booking.date}</p>
                  <p>{booking.time}</p>
                  <CardLink
                    onClick={(e) => onDeleteLinkClick(e, booking)}
                    to={`/bookings/${booking.id}`}
                  >
                    Cancel Booking
                  </CardLink>
                </InnerCard>
              </OuterCard>
            );
          })}
        </CardWrapper>
      </div>
    </>
  );
}
