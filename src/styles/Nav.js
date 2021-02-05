import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Nav = styled.nav`
display: flex; 
justify-content: flex-start; 
margin-top: 5px;
margin-bottom: 10px; 
font-family: 'Poppins', sans-serif;`

export const NavLink = styled(Link)`
text-decoration: none; 
margin: 20px; 
color: darkgray; 
font-size: 20px; 
:hover {
  color: darkslateblue; 
}
`
