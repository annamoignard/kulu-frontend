import React from 'react';
import { HomeImg, KuluLogo, LogoContainer, BookButton } from '../styles/Homepage';
import { ContactContainer, Contact, Phone, Email, Location } from '../styles/Contact';
import { Link } from 'react-router-dom';
import kululogo from '../assets/kululogo.png';


export function Home() {
  return (
    <>
      {/* <KuluLogo>
      <img src={kululogo} style={{ borderRadius: "50%" }} />
      </KuluLogo> */}
      <HomeImg>
        <LogoContainer>
          <BookButton to="/schedule">Join Us</BookButton>
        </LogoContainer>
      </HomeImg>
      <ContactContainer>
    <Contact> Contact Us</Contact>
    <Phone>Phone: </Phone>
        <Email>Email: </Email>
        <Location>Location: </Location>
      </ContactContainer>
    </>
  );
}
