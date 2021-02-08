import React, { useEffect, useState} from "react";
import { Btn } from '../styles/Schedule';
import { ScheduleContainer} from '../styles/Schedule';

export function Success(props) {
  const [booking, setBooking] = useState(null);
  
  useEffect(() => {
    const id = props.match.params.id;
    fetch(`${process.env.REACT_APP_BACKEND_URL}/bookings/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => res.json())
      .then((booking) => {
        console.log(booking)
        setBooking(booking);
      });
  }, []);


  // dangerously semantic html 

  return (
    booking && (
      <ScheduleContainer>
        <div>
          <h2>Name: {booking.name}</h2>
          <p>Time: {booking.time}</p>
          <p>Day: {booking.day}</p>
          <p>Price: ${booking.cost}</p>
        </div>
        <Btn to="/bookings">
          My Bookings
        </Btn>
      </ScheduleContainer>
    )
  );
}
