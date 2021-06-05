import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'
import Title from './TitleComponent'

const ExperienceCard = (props) => {
  return (
    <Container>
      <p>{props.experience.company}</p>
      <p>{props.experience.position}</p>
      <p>{props.experience.startDate}</p>
      <p>{props.experience.endDate}</p>
    </Container>
  )
}

const Experiences = (props) => {
	return(
    <>
      <NavigationBar />
      <Title title={"Experiences"} />
      <Fade bottom duration={800} delay={200} distance="30px">
        <Container>
          {props.experiences.map((experience) => <ExperienceCard experience={experience} />)}
        </Container>
      </Fade>
    </>
	);
}

export default Experiences;