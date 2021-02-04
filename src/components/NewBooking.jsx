import React, { useState } from "react";
// import { Form } from "../styles/NewBooking";
import { loadStripe } from "@stripe/stripe-js";

//stripe publishable key- Load Stripe.js
const stripePromise = loadStripe(
  "pk_test_51Hh0orKL4jTADfFod2j1PRBdOLlGRr1wbGgfGgs1KnC7VjNJxAJOIEbUC47trUphJw8VsAZ5N4kSNdfKA8FvgaVy00CkIT0WN8"
);

export function NewBooking({ history, location }) {
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
      //fetch stripe payments page using local host
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
  // Client can view their booking and pay for the class
  return (
    <>
      <h2>Your Booking</h2>
      <h3>{location.state.name}</h3>
      <h3>{location.state.time}</h3>
      <h3>{location.state.instructor}</h3>
      <h1>Book Class</h1>
      <h3>$25</h3>
      
      <button
        type="button"
        id="checkout-button"
        role="link"
        onClick={onFormSubmit}
      >
        Checkout
      </button>

      {/* 
      <Form onSubmit={onFormSubmit}></Form>
      <Form>
        <div className="form-group">
          <label htmlFor="client-name">Your Name</label>
          <input
            type="text"
            name="client-name"
            id="client-name"
            placeholder="Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
        </div>
      </Form> */}
      <p>View your booking link</p>
    </>
  );
}
