import React, { useState } from "react";

export function CreateSession({ history }) {
  const [name, setName] = useState("Vinyasa Flow");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState("");
  const [cost, setCost] = useState("");

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/sessions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
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
      // this is like using redirect_to
      history.push("/schedule");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <h1>Add Class</h1>
      <form onSubmit={onFormSubmit}>
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
            type="date"
            name="date"
            id="date"
            placeholder="01-02-21"
            value={date}
            onChange={(e) => setDate(e.target.value)}
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
          <label htmlFor="cost">Price</label>
          <input
            type="number"
            name="cost"
            id="cost"
            placeholder="$25"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <label htmlFor="minutes">Minutes</label>
        <input
          type="text"
          name="minutes"
          id="minutes"
          placeholder="60"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
      <input id="submit" type="submit" value="Submit" />
    </form >
    </>
  );
} 
