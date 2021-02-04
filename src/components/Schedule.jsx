import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ScheduleCards, ScheduleContainer, Title } from '../styles/Schedule';


export function Schedule() {
  const [session, setSession] = useState([]);
  const [instructor, setInstructor] = useState(false);
  // const id = props.match.params.id;


  function fetchSessions() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => res.json())
      .then(({ sessions, instructor }) => {
        setSession(sessions)
        setInstructor(instructor)
      });
  }

  useEffect(() => {
    fetchSessions();
  }, []);

  async function onDeleteLinkClick(e, session) {
    try {
      e.preventDefault();
      if (window.confirm("Are you sure you want to delete?")) {
        await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/sessions/${session.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          }
        );
        fetchSessions();
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(session)
  return (
    <>
      <Title>Timetable</Title>
      <ScheduleContainer>
        {session && session.map((s) => {
          return (
            <ScheduleCards key={s.id}>
              <h2>{s.name}</h2>
              <p>{s.time}</p>
              <p>{s.cost}$</p>
              <p>{s.instructor}</p>
              <p>{s.minutes}minutes</p>
              <Link
                to={{
                  pathname: "/new-booking",
                  state: {
                    name: s.name,
                    time: s.time,
                    instructor: s.instructor,                    
                  },
                }}
              >
                {" "}
                  Book Now
                </Link> 
                {/* what we are saying here is if the condition on the left is true, do the task on the right. so if instructor = true, then render these links  */}
              {instructor && (
                <>
                  <Link to="/create-session">Add Class</Link>
                  <Link to={`/session/${s.id}/update`}>Update</Link>
                  <Link onClick={(e) => onDeleteLinkClick(e, s)}
                    to={`/session/${s.id}`}>Remove</Link>
                </>
              )
              }
            </ScheduleCards>
          );
        })}
      </ScheduleContainer>
    </>
  );
}
