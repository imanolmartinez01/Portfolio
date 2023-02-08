import React from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle, IconsContainer, Img } from './SnippetsStyles';
import { SiDiscogs } from "react-icons/si";
import { MdSportsRugby } from "react-icons/md";
import { FaMusic } from "react-icons/fa";


import Image from 'next/image'

const Snippets = () =>  (
  <Section id="snippets">
    <SectionDivider />
    <br />
    <SectionTitle>Snippets</SectionTitle>
    <SectionText>
      Some other hobbies aboout me.
    </SectionText>
    <List>
      <ListItem>
        <IconsContainer>
          <SiDiscogs size="2.5rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>KeepSilent Collective</ListTitle>
          <ListParagraph>
          I manage an artist collective who invite other artist to collaborte, share music content and make partys in Barcelona.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/keepsilent.png" 
        alt="KeepSilentCollective" />
      </ListItem>
      <ListItem>
        <IconsContainer>
          <MdSportsRugby size="3rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>Professional Rugby Player</ListTitle>
          <ListParagraph>
            I'm a Professional Rugby Player in Santboi Team. Last season we won the National Spain League. In may finish the season and also will finish my career as a Rugby Player &#40;I'm the one that is holding the cup&#41;.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/santboi.png" 
        alt="SantboiImage" />
      </ListItem>
      <ListItem>
        <IconsContainer>
          <FaMusic size="3rem" />
        </IconsContainer>
        <ListContainer>
          <ListTitle>DJ/Live Artist</ListTitle>
          <ListParagraph>
          I command a group of three musicians, including me, who make live shows with a guitar player, a singer and me making drums with machines.
          <br/>Also I'm a vinyl DJ.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <Img src="/images/ImanolInStudio.png" 
        alt="DJ/Live" />
      </ListItem>
    </List>
  </Section>
);

export default Snippets;
