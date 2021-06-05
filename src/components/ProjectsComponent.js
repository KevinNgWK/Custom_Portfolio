import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'
import Title from './TitleComponent'


const ProjectCard = (props) => {
  return (
    <Container>
      <p>{props.project.title}</p>
      <p>{props.project.info}</p>
      <p>{props.project.repo}</p>
    </Container>
  )
}

const Projects = (props) => {
	return(
    <>
      <NavigationBar />
      <Title title={"Projects"} />
      <Fade bottom duration={800} delay={200} distance="30px">
        <Container>
          {props.projects.map((project) => <ProjectCard project={project} />)}
        </Container>
      </Fade>
    </>
	);
}

export default Projects;