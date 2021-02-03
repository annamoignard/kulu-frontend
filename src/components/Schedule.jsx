import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ScheduleCards, ScheduleContainer, Title } from "../styles/Schedule";

export function Schedule() {
  const [session, setSession] = useState([]);
  const [instructor, setInstructor] = useState(false);
  // const id = props.match.params.id;

  // test
  function fetchSessions() {
    fetch("http://localhost:3000/sessions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(({ sessions, instructor }) => {
        setSession(sessions);
        setInstructor(instructor);
      });
  }

  useEffect(() => {
    fetchSessions();
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

  async function onDeleteLinkClick(e, session) {
    try {
      e.preventDefault();
      if (window.confirm("Are you sure you want to delete?")) {
        await fetch(`http://localhost:3000/sessions/${session.id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        fetchSessions();
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(session);
  return (
    <>
      <Title>Timetable</Title>
      <ScheduleContainer>
        {session &&
          session.map((s) => {
            return (
              <ScheduleCards key={s.id}>
                <h2>{s.name}</h2>
                <p>{s.time}</p>
                <p>{s.cost}</p>
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
                {instructor && (
                  <>
                    <Link to={`/session/${s.id}/update`}>Update</Link>
                    <Link to="/create-session">Add Class</Link>
                    <Link
                      onClick={(e) => onDeleteLinkClick(e, s)}
                      to={`/session/${s.id}`}
                    >
                      Remove
                    </Link>
                  </>
                )}
              </ScheduleCards>
            );
          })}
      </ScheduleContainer>
    </>
  );
}
