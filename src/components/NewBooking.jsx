import React, { useState, useEffect } from "react";

export function NewBooking(props) {
  const [booking, setBooking] = useState(null);
  const id = props.match.params.id

  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
      .then((res) => res.json())
      .then((body) => {
        const foundBooking = booking.find((booking) => {
          return booking.id === id
        })
        setBooking(foundBooking)
      });
  }, [id]);

  return <h1>New Booking</h1>;
}
