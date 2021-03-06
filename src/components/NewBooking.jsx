import {
  Form,
  PayBtn,
  TextBox,
  Label,
  FormContainer,
  BtnBox,
  Price,
} from "../styles/Form";
import { BookClass } from "../styles/Form";
import bookclass from "../assets/bookclass.png";
import { loadStripe } from "@stripe/stripe-js";
//stripe published key
const stripePromise = loadStripe(
  "pk_test_51Hh0orKL4jTADfFod2j1PRBdOLlGRr1wbGgfGgs1KnC7VjNJxAJOIEbUC47trUphJw8VsAZ5N4kSNdfKA8FvgaVy00CkIT0WN8"
);

export function NewBooking({ history, location }) {
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
        // new booking is taking the information from create session and automatically entering it in a form
        body: JSON.stringify({
          time: location.state.time,
          name: location.state.name,
          date: location.state.date,
          day: location.state.day,
        }),
      });
      console.log(e);
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

      history.push("/bookings");
    } catch (err) {}
  }
  // Client can view their booking and pay for the class
  return (
    <>
      <BookClass>
        <img src={bookclass} alt="kulu-logo" style={{ borderRadius: "50%" }} />
      </BookClass>
      <FormContainer>
        <Form onSubmit={onFormSubmit}>
          <Label htmlFor="name">Class</Label>
          <TextBox
            type="text"
            name="name"
            id="name"
            defaultValue={location.state.name}
            disabled
          />
          <Label htmlFor="time">Time</Label>
          <TextBox
            type="text"
            name="time"
            id="time"
            defaultValue={location.state.time}
            disabled
          />
          <Label htmlFor="day">Day</Label>
          <TextBox
            type="text"
            name="day"
            id="day"
            defaultValue={location.state.day}
            disabled
          />
          <Label htmlFor="date">Date</Label>
          <TextBox
            type="text"
            name="date"
            id="date"
            defaultValue={location.state.date}
            disabled
          />
          <>
            {/* This link will take you to Stripe  */}
            <Price>$25</Price>
            {/* <Button id="checkout-button" type="submit" value="Submit" /> */}
          </>
        </Form>

      </FormContainer>

      <BtnBox>
        <PayBtn
          type="button"
          id="checkout-button"
          role="link"
          onClick={onFormSubmit}
        >
          Submit
        </PayBtn>
      </BtnBox>
    </>
  );
}
