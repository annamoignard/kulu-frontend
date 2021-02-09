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
        <Phone>Phone: 0417 123 456 </Phone>
        <Email>Email: kuluyoga@studio.com</Email>
        <Location>Location: 123 Beach Rd, Torquay VIC 3228 </Location>
      </ContactContainer>
    </>
  );
}
