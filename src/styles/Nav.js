import styled from 'styled-components' 
import { Link } from "react-router-dom"; 

export const Nav = styled.nav `
display: flex; 
justify-content: space-between; 
margin-top: 0; 
font-family: 'Poppins', sans-serif;`

export const NavLink = styled(Link) `
text-decoration: none; 
color: darkgray; 
:hover {
  color: darkslateblue; 
}
`
