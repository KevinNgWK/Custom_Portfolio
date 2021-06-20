import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Accordion, Card } from 'react-bootstrap';
import Title from './Title'

const ExperienceCard = (props) => {
  return (
    <Accordion>
      <Card className="experience-wrapper__text">
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          <h3 className="experience-wrapper__text-title">{props.experience.company}</h3>
          <h3 className="experience-wrapper__text-subtitle">{props.experience.position}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            {props.experience.descriptions.map((description) => {
              return (
                <Card.Text>
                  <p><li>{description}</li></p>
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
    <section id="experiences">
      <Container>
        <div className="experience-wrapper">
          <Title title={"Experiences"} />
          {props.experiences.map((experience, index) => {
            return(
              <Fade bottom duration={800} delay={index*200 + 200} distance="30px">
                <ExperienceCard experience={experience} index={index} />
              </Fade>
            )
          })}
        </div>
      </Container>
    </section>
	);
}

export default Experiences;