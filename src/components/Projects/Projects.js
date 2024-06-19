import React from 'react'
import { TechStackCard, ProjectImageContainer, ProjectImage, Card, Button} from './ProjectStyles'
import {  IconContainer, PaddingContainer, FlexContainer, ParaText,  Heading} from '../../Styles/GlobalStyles'
import {FaGithub} from 'react-icons/fa';

function Projects({data}) {
  return (
    <>
        <FlexContainer fullWidthChild>
          <Card>
            <FlexContainer align='center' gap="1rem">
              <Heading as='h1' size='h1' bottom="1rem" >{data.name}</Heading>
              <IconContainer size="3rem">
                <FaGithub fontSize='3.5rem'/>
              </IconContainer>
        </FlexContainer>
              <PaddingContainer >
                  <FlexContainer gap="1rem">{data.tech.map((stack) => 
                    <TechStackCard>{stack}</TechStackCard>
                  )}
                  </FlexContainer>
              </PaddingContainer>
              <ParaText top="2rem" bottom="2rem">{data.desc}</ParaText>
              <Button href={data.ProUrl} target='_blank'>VISITE O SITE!</Button>
          </Card>
          <ProjectImageContainer justify="flex-end">
              <ProjectImage src={data.ProImg}/>
          </ProjectImageContainer>
        </FlexContainer>
    </>
  )
}

export default Projects;
