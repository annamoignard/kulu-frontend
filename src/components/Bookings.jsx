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
  const [booking, setBooking] = useState([]);

  function fetchBookings() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/bookings`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(({bookings}) => {
        setBooking(bookings);
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
          {booking && booking.map((b) => {
            return (
              <OuterCard key={b.id}>
                <InnerCard>
                  <p>{b.name}</p>
                  <p>{b.date}</p>
                  <p>{b.time}</p>
                  <p>{b.day}</p>
                  <CardLink
                    onClick={(e) => onDeleteLinkClick(e, b)}
                    to={`/booking/${b.id}`}
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
