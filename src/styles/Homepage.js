import styled from 'styled-components' 
import kuluhome from '../assets/kuluhome.jpg';
import { Link } from "react-router-dom"; 

export const HomeImg = styled.div`
  margin-top: 20px;
  border: 1px solid #000;
  background-image: url(${kuluhome});
  width: 2000px;
  height: 2000px;
  background-repeat: no-repeat; 
`

export const LogoContainer = styled.h1 `
  display: flex; 
  justify-content: center; 
  align-items: center; 
`

export const KuluLogo = styled.div `
  height: 250px; 
  width: 250px; 
  display: flex; 
  justify-content: flex-end; 
  margin: 0 auto; 
`
export const BookButton = styled(Link)`
  cursor: pointer; 
  background-color: #1f7a7a; 
  text-decoration: none; 
  margin-top: 500px; 
  border: 0; 
  border-radius: 10px;
  color: #fff; 
  box-shadow: 0 10px 20px rgba(0,0,0,0.1), 0.6px 6px rgba(0,0,0,0.1);
  padding: 14px 40px; 
  font-family: 'Poppins', sans-serif;
  .btn:active {
  transform: scale(0.98); 
}
  .btn:focus {
    outline: 0; 
  }
    :hover {
      color: #fff; 
      background-color:  #248f8f; 
      opacity: 0.5;
  } `
