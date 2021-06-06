import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import NavigationBar from './NavBar'
import Title from './Title'
import '../style/texts.css'

const ExperienceCard = (props) => {
  return (
    <Accordion defaultActiveKey={"0"}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          <h4 className="Card-main-header-text">{props.experience.company}</h4>
          <h4 className="Card-sub-header-text">{props.experience.position}</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            {props.experience.descriptions.map((description) => {
              return (
                <Card.Text>
                  <h4 className="Card-body-information-text">{description}</h4>
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