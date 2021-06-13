import React from 'react';
import Fade from 'react-reveal/Fade';

const Title = (props) => (
  <Fade bottom duration={1000} delay={150} distance="0px">
    <h2 className="section-title">{props.title}</h2>
  </Fade>
);

export default Title