import React, { useState, useEffect } from "react";
import {
  OuterCard,
  InnerCard,
  CardWrapper,
  CardLink
} from "../styles/NewBooking";
import { KuluLogo } from "../styles/Homepage";
import { Title } from '../styles/Schedule';
import kululogo from "../assets/kululogo.png";

export function Bookings() {
  const [bookings, setBookings] = useState([]);

  function fetchBookings() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/bookings`, {
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
      if (window.confirm("Are you sure you want to cancel? We cannot refund the $25 payment.")) {
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
        <img src={kululogo} alt="kulu-logo" style={{ borderRadius: "50%" }} />
      </KuluLogo>
      <div>
        <Title>Your Kulu Bookings</Title>
        <CardWrapper>
          {bookings && bookings.map((booking) => {
            return (
              <OuterCard key={booking.id}>
                <InnerCard>
                  <p>{booking.name}</p>
                  <p>{booking.day}</p>
                  <p>{booking.time}</p>
                  <p>{booking.date}</p>
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
