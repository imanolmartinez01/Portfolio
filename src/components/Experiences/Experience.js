import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './ExperienceStyles';

const Experiences = () =>  (
  <Section id="experience">
    <SectionDivider />
    <br />
    <SectionTitle>Experiences as Developer</SectionTitle>
    <SectionText>
      When I wear a shirt of a team I will take it as high as I can.
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Full Stack Developer - Client Flows</ListTitle>
          <ListParagraph>
          &#9830; Developed and maintained a React front-end interface with Typescript and Tailwind.
          </ListParagraph>
          <ListParagraph>
          &#9830; Crafted Firebase backend architecture for secure data storage and integration.
          </ListParagraph>
          <ListParagraph>
          &#9830; Implemented Stripe subscription payments flows for increased customer convenience.
          </ListParagraph>
          <ListParagraph>
          &#9830; Implemented email notification feature for delivering real-time notifications.
          </ListParagraph>
          <ListParagraph>
          &#9830; Implemented backend triggers to manage data when the database is updated.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Full-Stack Developer - Gemini Expert S.L.</ListTitle>
          <ListParagraph>
          &#9830; Developed and maintained three Flutter applications.
          </ListParagraph>
          <ListParagraph>
          &#9830; Crafted SQL Server schema for data storage and retrieval.
          </ListParagraph>
          <ListParagraph>
          &#9830; Built .Net C# microservice to enable seamless communication between app and database.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Experiences;
