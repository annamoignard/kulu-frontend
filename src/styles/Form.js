import styled from "styled-components";
import { Link } from "react-router-dom";


export const Title = styled.h1`
 font-family: 'Poppins', sans-serif;
 text-align: center; 
 color: navy;
 `

export const FormContainer = styled.div`
display: flex; 
/* align-items: center; */
justify-content: center; 
flex-direction: column; 
`

export const TextBox = styled.input`
width: 200px;
font-family: 'Poppins', sans-serif;
color: navy; 
 `

export const PayBtn = styled.button`
width: 100px; 
color: navy; 
margin-top: 15px; 
text-decoration: none; 
padding: 5px; 
font-size: 18px; 
font-family: 'Poppins', sans-serif;
text-align: center; 
display: flex; 
justify-content: center; 
:hover {
  color: navy; 
}
`

export const BtnBox = styled.div`
display: flex; 
justify-content: center;
 `

export const Price = styled.h3`
display: flex; 
justify-content: center;
font-family: 'Poppins', sans-serif;
color: navy; 
 `

export const Button = styled.input`
width: 100px; 
height: 75px; 
color: navy; 
margin-top: 15px; 
padding: 5px; 
font-size: 18px; 
`

export const Label = styled.label`
margin: 5px; 
font-size: 20px; 
font-family: 'Poppins', sans-serif;
color: navy; 
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; `

export const AddClass = styled.div `
  height: 500px; 
  width: 500px; 
  display: flex; 
  margin: 0 auto; 
  margin-bottom: 0px; 
`

export const BookClass = styled.div`
  height: 500px; 
  width: 500px; 
  display: flex; 
  margin: 0 auto; 
  margin-bottom: 0px; 
`

export const UpdateClass = styled.div`
  height: 500px; 
  width: 500px; 
  display: flex; 
  margin: 0 auto; 
  margin-bottom: 0px; 
`


export const Select = styled.select`
width: 400px;
font-family: 'Poppins', sans-serif;
color: navy; 
`