import React from 'react'
import { PaddingContainer, Heading} from '../../Styles/GlobalStyles'
import { projectDetails } from '../Data/ProjectData'
import Projects from './Projects'
function MyProjects() {
  return (
    <PaddingContainer id='Projects' top="5%" bottom="5%">
        <Heading as='h1' size='h1' align="center">PROJETOS</Heading>
        <Heading as='h4' size='h4' align='center'>OQUE EU FAÇO</Heading>
        {projectDetails.map((project) => (
            <PaddingContainer top="5rem" bottom="5rem" key={project.id}><Projects data={project}/></PaddingContainer>
        ))}
    </PaddingContainer>
  )
}

export default MyProjects;
