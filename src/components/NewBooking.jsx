import React, { useState } from "react";
import {
  NewBookingForm,
  BookingLabel,
  BookingInput,
  BookingInputSubmit,
} from "../styles/NewBooking";

export function NewBooking() {
  const [session, setSession] = useState("");
  const [date, setDate] = useState("");
  const [clientName, setClientName] = useState("");

  console.log(session, date, clientName)

  return (
    <NewBookingForm>
      <BookingLabel for="session">Session</BookingLabel>
      <select
        name="session"
        id="session"
        value={session}
        onChange={(e) => setSession(e.target.val)}
      >
        <option value="Vinyasa Flow">Vinyasa Flow</option>
        <option value="Power Flow">Power Flow</option>
        <option value="Restorative Flow">Restorative Flow</option>
      </select>
      <BookingLabel htmlFor="date">Date</BookingLabel>
      <BookingInput
        type="text"
        name="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.val)}
      />
      <BookingLabel htmlFor="Client Name">Client Name</BookingLabel>
      <BookingInput
        type="text"
        name="Client Name"
        id="Client Name"
        value={clientName}
        onChange={(e) => setClientName(e.target.val)}
      />
      <BookingInputSubmit id="submit" type="submit" value="Submit" />
    </NewBookingForm>
  );
}
