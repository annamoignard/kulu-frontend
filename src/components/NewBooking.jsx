import React, { useState } from "react";
import { Form } from "../styles/NewBooking";

export function NewBooking({ history }) {
  const [session, setSession] = useState("");
  const [date, setDate] = useState("");
  const [clientName, setClientName] = useState("");

  async function onFormSubmit(e) {
    try {
      e.preventDefault();
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          NewBooking: {
            session: session,
            date: date,
            client_name: clientName,
          },
        }),
      });
      // redirect_to
      history.push("/bookings");
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="session">Choose Class</label>
        <select
          name="session"
          id="session"
          value={session}
          onChange={(e) => setSession(e.target.value)}
        >
          <option value="Vinyasa Flow">Vinyasa Flow</option>
          <option value="Power Flow">Power Flow</option>
          <option value="Restorative Flow">Restorative Flow</option>
        </select>
      </div>
      <Form onSubmit={onFormSubmit}>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            name="date"
            id="date"
            placeholder="dd/mm/yy"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="client-name">Client Name</label>
          <input
            type="text"
            name="client-name"
            id="client-name"
            placeholder="Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
        <input id="submit" type="submit" value="Submit" />
      </Form>
    </>
  );
}
