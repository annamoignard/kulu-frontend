import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export function Schedule(){
  const [schedule, setSchedule] = useState([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL)
    .then((res) => res.json())
    .then((body) => setSchedule(body));
  }, []);

  return ( 
    <div>
      <h1>Schedule</h1>
      {schedule.map((schedule) => {
        return (
          <div key={schedule.id}>
            <h2>{schedule.session}</h2>
            <p>{schedule.date}</p>
            <p>{schedule.instructor}</p>
            <Link to="/NewBooking"> Book a Class</Link>
          </div>
        );
      })}
    </div>
    );
  }
