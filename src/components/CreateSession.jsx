import React, { useState } from "react";
import { Form, Select, Button, TextBox, Label, FormContainer } from '../styles/Form';
import { AddClass } from '../styles/Form';
import ADDCLASS from '../assets/ADDCLASS.png';

export function CreateSession({ history }) {
  const [name, setName] = useState("Vinyasa Flow");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState("");
  const [cost, setCost] = useState("");
  const [day, setDay] = useState("Monday");
  const [instructor_name, setInstructorname] = useState("Instructor");

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
            cost: cost,
            day: day,
            instructor_name: instructor_name
          },
        }),
      });
      // this is like using redirect_to
      history.push("/schedule");
    } catch (err) {
    }
  }

  return (
    <>
      <AddClass>
        <img src={ADDCLASS} alt="kulu-logo" style={{ borderRadius: "50%" }} />
      </AddClass>
      <FormContainer>
      <Form onSubmit={onFormSubmit}>
          <Label htmlFor="name">Class Type</Label>
          <Select
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <option value="Vinyasa Flow">Vinyasa Flow</option>
            <option value="Power Flow">Restorative Flow</option>
            <option value="Restorative Flow">Power Flow</option>
          </Select>
          <Label htmlFor="instructor_name">Instructor</Label>
          <Select
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
          </Select>
          <Label htmlFor="day">Day</Label>
          <Select
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
          </Select>
          <Label htmlFor="date">Date</Label>
          <TextBox
            type="date"
            name="date"
            id="date"
            placeholder="01-02-21"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Label htmlFor="time">Time</Label>
          <TextBox
            type="time"
            name="time"
            id="time"
            placeholder="6:00am"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <Label htmlFor="cost">Price</Label>
          <TextBox
            type="number"
            name="cost"
            id="cost"
            placeholder="$25"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        <Label htmlFor="minutes">Minutes</Label>
        <TextBox
          type="text"
          name="minutes"
          id="minutes"
          placeholder="60"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <Button id="submit" type="submit" value="Submit" />
      </Form >
      </FormContainer>
    </>
  );
} 
