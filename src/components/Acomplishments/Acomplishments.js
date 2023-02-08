import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Years of experience as developer'},
  { number: 6, text: 'Projects I have worked on', },
  { number: 1, text: 'Spain Rugby Cup', },
  { number: 1, text: 'Music track release', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
