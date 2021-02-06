import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form } from '../styles/Form';

export function UpdateSession() {
  const [name, setName] = useState("Vinyasa Flow");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState("");
  const [cost, setCost] = useState("");
  const [day, setDay] = useState("Monday");
  const [instructor_name, setInstructorname] = useState("Instructor");
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((session) => {
        setName(session.name);
        setDate(session.date);
        setMinutes(session.minutes);
        setTime(session.time);
        setCost(session.cost);
        setDay(session.day);
        setInstructorname(session.instructor_name);
      })
  }, [id])

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          session: {
            name: name,
            date: date,
            time: time,
            minutes: minutes,
            cost: cost,
            day: day,
            instructor_name: instructor_name
          },
        }),
      });
      // redirect_to
      history.push("/schedule");
    } catch (err) {
    }
  }

  return (
    (
      <>
        <h1>Update Class</h1>
        <Form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Class Type</label>
            <select
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option value="Vinyasa Flow">Vinyasa Flow</option>
              <option value="Power Flow">Restorative Flow</option>
              <option value="Restorative Flow">Power Flow</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="instructor_name">Instructor</label>
            <select
              type="text"
              name="instructor_name"
              id="instructor_name"
              value={instructor_name}
              onChange={(e) => setInstructorname(e.target.value)}
            >
              <option value="Ziggy Love">Ziggy Love</option>
              <option value="Anna Tamara">Anna Tamara</option>
              <option value="Chris Scott">Chris Scott</option>
              <option value="Indigo Love">Indigo Love</option>
              <option value="Nicole">Nicole</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="day">Day</label>
            <select
              type="text"
              name="day"
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              name="date"
              id="date"
              placeholder="01-02-2021"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cost">Price</label>
            <input
              name="cost"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              name="time"
              id="time"
              placeholder="6:00am"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="minutes">Minutes</label>
            <input
              name="minutes"
              id="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </div>
          <input id="submit" type="submit" value="Submit" />
        </Form>
      </>
    )
  )
}