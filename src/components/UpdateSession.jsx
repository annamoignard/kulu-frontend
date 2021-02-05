import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form } from '../styles/Form'; 

export function UpdateSession() {
  const [name, setName] = useState("Vinyasa Flow");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState("");
  const [cost, setCost] = useState("");
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
            cost: cost
          },
        }),
      });
      // redirect_to
      history.push("/schedule");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    (
      <>
        <h1>Edit Session</h1>
        <Form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
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