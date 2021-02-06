import styled from 'styled-components';
import { Link } from "react-router-dom";

//Styles for form on NewBookings Page
export const Form = styled.form`
display: flex;
  flex-direction: column;
  .form-group {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
    label {
      font-size: large;
      margin-bottom: 5px;
    }
    input {
      height: 30px;
      font-size: 15px;
    }
    select {
      height: 40px;
      font-size: 15px;
    }
  }
  #submit {
    width: 80px;
    height: 20px;
    margin: 1px 0px;
  }
`;
//Styles for Bookings Page
export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
text-align: center;`

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: 'Poppins', sans-serif;
`;

export const OuterCard = styled.div`
  width: 30%;
`;

export const InnerCard = styled.div`
  margin: 10px 0px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 3px;
`;

export const CardLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: crimson;
`;