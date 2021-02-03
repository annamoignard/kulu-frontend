import React from 'react';
import { HomeImg, KuluLogo, LogoContainer } from '../styles/Homepage'; 
import kuluhome from '../assets/kuluhome.jpg';
import kululogo from '../assets/kululogo.png';


export function Home(){
  return ( 
    <>
    <LogoContainer>
      <KuluLogo>
      <img src={kululogo} style={{ borderRadius: "50%" }} />
      </KuluLogo>
    </LogoContainer>

    <HomeImg>
      <img src={kuluhome} />
    </HomeImg>
    </>
    );
  }
