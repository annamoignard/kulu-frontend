import React from 'react';
import { HomeImg, LogoContainer, BookButton } from '../styles/Homepage';
import { ContactContainer, Contact, Phone, Email, Location } from '../styles/Contact';



export function Home() {
  return (
    <>
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
