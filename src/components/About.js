import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title'

const About = (props) => {
	return(
    <section id="about">
      <Container>
        <Title title={"About Me"} />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade left duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                Haven't found a good photo of myself
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade right duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__info">
                {props.about.description.map((description) => {
                  return (
                    <p className="about-wrapper__info-text">
                      {description}
                    </p>
                  )
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
	);
}

export default About;