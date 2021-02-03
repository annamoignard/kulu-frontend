import React, { useState } from "react";
import { Form } from "../styles/NewBooking";
import { loadStripe } from "@stripe/stripe-js";

//stripe publishable key- Load Stripe.js
const stripePromise = loadStripe(
  "pk_test_51Hh0orKL4jTADfFod2j1PRBdOLlGRr1wbGgfGgs1KnC7VjNJxAJOIEbUC47trUphJw8VsAZ5N4kSNdfKA8FvgaVy00CkIT0WN8"
);

export function NewBooking({ history, location }) {
  console.log(location.state)
  const [session, setSession] = useState("");
  const [date, setDate] = useState("");
  const [clientName, setClientName] = useState("");

  //using localhost:3000 for backend url
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

      const stripe = await stripePromise;
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/charges`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      
      const stripeId = await response.json();
      // //When client clicks "pay" redirect to checkout
      const result = await stripe.redirectToCheckout({
        sessionId: stripeId.id,
      });

    } catch (err) {
      console.log(err.message);
    }
  }

  // Form for client to fill out new booking
  return (
    <>
    <h1>Your Booking</h1>
    <Form onSubmit={onFormSubmit}></Form>
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
      <Form>
        <div className="form-group">
          <label htmlFor="date">Dates Available</label>
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
      </Form>
      <h1>Book Class $25</h1>
      <button
        type="button"
        id="checkout-button"
        role="link"
        onClick={onFormSubmit}
      >
        Checkout
      </button>
    </>
  );
}
