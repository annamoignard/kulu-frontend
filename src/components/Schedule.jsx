import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ScheduleCards, ScheduleContainer, Title } from '../styles/Schedule'; 



export function Schedule() {
  const [session, setSession] = useState([]);
  // const [instructor, setInstructor] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sessions")
      .then((res) => res.json())
      .then((body) => {
        console.log(body);
        setSession(body)
      });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:3000/instructors")
  //     .then((res) => res.json())
  //     .then((body) => {
  //       console.log(body);
  //       setInstructor(body)
  //     });
  // }, []);

  //  ask harrison on Monday 

  return (
    <>
    <Title>Schedule</Title>
    <ScheduleContainer>
      {session && session.map((s) => {
        return (
          <ScheduleCards key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.time}</p>
            <p>{s.instructor}</p>
            <p>{s.minutes}minutes</p>
            <Link to="/NewBooking"> Book Now</Link>
          </ScheduleCards>
        );
      })}
    </ScheduleContainer>
    </> 
  );
}
