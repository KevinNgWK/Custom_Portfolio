import React from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Person = (props) => {
  return (
    <section id="person" className="jumbotron">
      <Container>
        <Fade left duration={1000} delay={500} distance="30px">
          <h1 className="person-title">
            {props.person.introduction}{' '}
            <span className="text-color-main">{props.person.name}</span>
            <br />
            {props.person.description}
          </h1>
        </Fade>
        <Fade left duration={1000} delay={1000} distance="30px">
          <p className="person-cta">
            <span className="cta-btn cta-btn--person">
              <Link to="about" smooth duration={600}>
                {props.person.link}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Person;
