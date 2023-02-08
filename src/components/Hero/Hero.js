import React from 'react';
import Link from 'next/link';
import {  NavLink } from './../Header/HeaderStyles';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome, I'm Imanol and this is 
        my Personal Portfolio.
      </SectionTitle>
      <SectionText>Here is a breif review of my trayectory on Software Development and Personal Acomplishments. </SectionText>
      <Button ><Link href="#about"><NavLink>Learn More</NavLink></Link></Button>
    </LeftSection>
  </Section>
);

export default Hero;