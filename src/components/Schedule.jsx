import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';



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
    <div>
      <h1>Schedule</h1>
      {session && session.map((s) => {
        return (
          <div key={s.id}>
            <h2>{s.name}</h2>
            <p>{s.date}</p>
            <p>{s.instructor}</p>
            <Link to="/NewBooking"> Book a Class</Link>
          </div>
        );
      })}
    </div>
  );
}
