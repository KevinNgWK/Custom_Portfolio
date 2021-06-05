import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'
import Title from './TitleComponent'

const ProjectCard = (props) => {
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          {props.project.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            <Row>
              <Col md={4}>
                {props.project.info.map((information) => {
                  return (
                    <Card.Text>
                      {information}
                    </Card.Text>
                  );
                })}
              </Col>
              <Col md={{ span: 6, offset: 2}}>
                Temp placeholder for images/gifs
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

const Projects = (props) => {
	return(
    <>
      <NavigationBar />
      <Title title={"Projects"} />
        <Container>
          {props.projects.map((project, index) => {
            return (
              <Fade bottom duration={800} delay={index*400} distance="30px">
                <ProjectCard project={project} index={index}/>
              </Fade>
            )
          })}
        </Container>
    </>
	);
}

export default Projects;