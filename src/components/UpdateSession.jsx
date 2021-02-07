import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Form, Select, Button, TextBox, Label, FormContainer } from '../styles/Form';
import { UpdateClass } from '../styles/Form';
import updateclass from '../assets/updateclass.png';


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
        <UpdateClass>
          <img src={updateclass} alt="kulu-logo" style={{ borderRadius: "50%" }} />
        </UpdateClass>
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
              <option value="Nicole Young">Nicole Young</option>
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
              type="text"
              name="date"
              id="date"
              placeholder="01-02-2021"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Label htmlFor="cost">Price</Label>
            <TextBox
              name="cost"
              id="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
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
            <Label htmlFor="minutes">Minutes</Label>
            <TextBox
              name="minutes"
              id="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <Button id="submit" type="submit" value="Submit" />
          </Form>
        </FormContainer>
      </>
    )
  )
}