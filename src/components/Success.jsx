import React, { useEffect, useState} from "react";
import { Btn, ScheduleCards , ScheduleContainer} from '../styles/Schedule';
import { Heading } from '../styles/Success';

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


 
// this will return our client's new booking, with a link back to view all bookings
  return (
    booking && (
      <ScheduleContainer>
        <Heading>
          <h1>Thanks so much for your payment! We can't wait to see you in class. Please check your emails for a confirmation!</h1>
        </Heading>
        <ScheduleCards>
          <h2>{booking.name}</h2>
          <p>{booking.time}</p>
          <p>{booking.day}</p>
          <p>${booking.cost}</p>
        <>
        <Btn to="/bookings">
          My Bookings
        </Btn>
        </>
        </ScheduleCards>
      </ScheduleContainer>
    )
  );
}
