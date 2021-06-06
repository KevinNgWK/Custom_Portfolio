import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import NavigationBar from './NavBar'
import Title from './Title'
import '../style/Projects.css'

const ProjectCard = (props) => {
  return (
    <Accordion defaultActiveKey={"0"}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          <h4 className="Card-main-header-text">{props.project.title}</h4>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            <Row>
              <Col md={{ span: 5, order: 1 }} xs={{ span: 12, order: 2 }}>
                {props.project.info.map((information) => {
                  return (
                    <Card.Text>
                      <h4 className="Card-body-information-text">{information}</h4>
                    </Card.Text>
                  );
                })}
                <div className="Button-container">
                  <Button href={props.project.repo}>
                    <h4 className="Button-text">
                      Code
                    </h4>
                    {/* <img className="Button-Image" src={'assets/images/GitHub-Mark-Light-32px.png'} /> */}
                  </Button>
                </div>
              </Col>
              <Col md={{ span: 5, offset: 2, order: 2}} xs={{ span: 12, order: 1 }}>
                <img className="Project-body-image" src={props.project.img}/>
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