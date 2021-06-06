import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'
import Title from './TitleComponent'

const ExperienceCard = (props) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          {props.experience.company}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            {props.experience.descriptions.map((description) => {
              return (
                <Card.Text>
                  {description}
                </Card.Text>
              );
            })}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

const Experiences = (props) => {
	return(
    <>
      <NavigationBar />
      <Container>
        <Title title={"Experiences"} />
        {props.experiences.map((experience, index) => {
          return(
            <Fade bottom duration={800} delay={index*400 + 200} distance="30px">
              <ExperienceCard experience={experience} index={index} />
            </Fade>
          )
        })}
      </Container>
    </>
	);
}

export default Experiences;