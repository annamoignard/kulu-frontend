import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Title = styled.h1`
font-family: 'Poppins', sans-serif;
text-align: center; 
`
export const ScheduleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; 
  margin-top: 40px; 
  font-family: 'Poppins', sans-serif;`

export const Btn = styled(Link)`
text-decoration: none; 
color: darkgray; 
text-align: center; 
font-size: 16px; 
:hover {
  color: #1f7a7a;
}
`

export const ScheduleCards = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  display: flex;
  flex-direction: column; 
  flex: 0 1 24%; 
  box-sizing: border-box; 
  border: 1px solid black; 
  padding: 10px; 
  margin: 5px 10px;
 `