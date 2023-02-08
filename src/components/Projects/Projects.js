import React, { useEffect } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, ListAcco, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { List, ListItem } from '../Technologies/TechnologiesStyles';
import { useState } from 'react';
import { getProjects } from '../../Firebase/firestoreFunctions';

export default function Projects () {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function callGetProjects() {
      setProjects(await getProjects());
      setLoading(false);
      console.log('Projects:',projects);
    }

    callGetProjects();
  }, [])

  return (
  loading === true 
    ? (<h4>Loading...</h4>)
    : (<Section id="projects">
    <SectionDivider />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit, accomplishments}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          {accomplishments.length !== 0 ? <TitleContent>Accomplishment</TitleContent> : null}
          <ListAcco>
            {accomplishments.map((acomplishment, index) => (
                <li key={index}>
                  {acomplishment}
                </li>
            ))}
          </ListAcco>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
              {visit !== '' ? <ExternalLinks href={visit}>Code</ExternalLinks> :  null}
              {source !== '' ? <ExternalLinks href={source}>Source</ExternalLinks> :  null}
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
  ))
};
