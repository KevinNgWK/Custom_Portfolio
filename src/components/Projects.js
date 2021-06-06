import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import NavigationBar from './NavBar'
import Title from './Title'
import logo from '../data/images/GitHub-Mark-Light-32px.png'

const ProjectCard = (props) => {
  return (
    <Accordion defaultActiveKey={"0"}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          {props.project.title}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            <Row>
              <Col md={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                {props.project.info.map((information) => {
                  return (
                    <Card.Text>
                      {information}
                    </Card.Text>
                  );
                })}
                <Button href={props.project.repo}>Source Code <img src={logo} /></Button>
              </Col>
              <Col md={{ span: 6, offset: 2, order: 2}} xs={{ span: 12, order: 1 }}>
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
      <Container>
        <Title title={"Projects"} />
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