import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsContainer } from './TechnologiesStyles';
import { SiFlutter } from "react-icons/si";

const Technologies = () =>  (
  <Section id="technologies">
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end to Front-End.
    </SectionText>
    <List>
      <ListItem>
        <IconsContainer>
          <DiReact size="3rem" />
          <SiFlutter size="2rem"/>
        </IconsContainer>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Flutter, React.js (Typescript) and Next.js.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            MongoDB, Node.js, .Net C#, SQL and Firebase
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
