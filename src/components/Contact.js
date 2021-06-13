import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from './Title'

const Contact = (props) => {
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {props.contact.cta}
            </p>
            <a
              target="blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={`mailto:${props.contact.email}`}
            >
              {props.contact.btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
