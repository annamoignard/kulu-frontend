import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ScheduleCards, ScheduleContainer, Title } from '../styles/Schedule'; 



export function Schedule() {
  const [session, setSession] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setSession(body)
      });
  }, []);

  return (
    <>
    <Title>Schedule</Title>
    <ScheduleContainer>
      {session && session.map((s) => {
        return (
          <ScheduleCards key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.time}</p>
            <p>{s.instructer_id}</p>
            <p>{s.minutes}</p>
            <Link to="/NewBooking"> Book Now</Link>
          </ScheduleCards>
        );
      })}
    </ScheduleContainer>
    </> 
  );
}
