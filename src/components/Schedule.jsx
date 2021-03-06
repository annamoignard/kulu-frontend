import React, { useState, useEffect } from "react";
import { ScheduleCards, ScheduleContainer, Btn } from "../styles/Schedule";
import { KuluLogo } from "../styles/Homepage";
import kululogo from "../assets/kululogo.png";

export function Schedule() {
  const [session, setSession] = useState([]);
  const [instructor, setInstructor] = useState(false);
  // const id = props.match.params.id;

  function fetchSessions() {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions`, {
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
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        fetchSessions();
      }
    } catch (err) {}
  }

  // here is our schedule for displaying information about the classes and users can make selections and book
  return (
    <>
      <KuluLogo>
        <img src={kululogo} alt="kulu-logo" style={{ borderRadius: "50%" }} />
      </KuluLogo>
      <ScheduleContainer>
        {session &&
          session.map((s) => {
            return (
              <ScheduleCards key={s.id}>
                <h2>{s.name}</h2>
                <p>{s.time}</p>
                <p>{s.date}</p>
                <p>${s.cost}</p>
                <p>{s.day}</p>
                <p>{s.instructor_name}</p>
                <p>{s.minutes}minutes</p>
                {/* path for newbooking file */}
                <Btn
                  to={{
                    pathname: "/new-booking",
                    state: {
                      name: s.name,
                      time: s.time,
                      instructor: s.instructor,
                      date: s.date,
                      day: s.day,
                    },
                  }}
                >
                  {" "}
                  Book Now
                </Btn>
                {/* what we are saying here is if the condition on the left is true, do the task on the right. so if instructor = true, then render these links  */}
                {instructor && (
                  <>
                    <Btn to={`/session/${s.id}/update`}>Update</Btn>
                    <Btn
                      onClick={(e) => onDeleteLinkClick(e, s)}
                      to={`/session/${s.id}`}
                    >
                      Remove
                    </Btn>
                  </>
                )}
              </ScheduleCards>
            );
          })}
      </ScheduleContainer>
    </>
  );
}
