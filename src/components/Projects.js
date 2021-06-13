import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Title from './Title'

const ProjectCard = (props) => {
  return (
    <Accordion>
      <Card className="project-wrapper__text">
        <Accordion.Toggle as={Card.Header} eventKey={props.index.toString()}>
          <h3 className="project-wrapper__text-title">{props.project.title}</h3>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={props.index.toString()}>
          <Card.Body>
            <Row>
              <Col md={{ span: 4, order: 1 }} xs={{ span: 12, order: 2 }}>
                <Card.Text>
                  {props.project.info.map((information) => {
                    return (
                        <p>{information}</p>
                    );
                  })}
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="cta-btn cta-btn--person" 
                    href={props.project.repo}
                  >
                    Source Code
                  </a>
                </Card.Text>
              </Col>
              <Col md={{ span: 6, offset: 2, order: 2}} xs={{ span: 12, order: 1 }}>
                <img src={props.project.img} alt="...loading" />
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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={"Projects"} />
          {props.projects.map((project, index) => {
            return (
              <Fade bottom duration={800} delay={index*400} distance="30px">
                <ProjectCard project={project} index={index}/>
              </Fade>
            )
          })}
        </div>
      </Container>
    </section>
	);
}

export default Projects;