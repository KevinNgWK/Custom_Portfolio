import React from 'react';
import Fade from 'react-reveal/Fade';
import '../style/texts.css'

const Title = (props) => (
  <Fade bottom duration={1000} delay={150} distance="0px">
    <h2 className="Title-text">{props.title}</h2>
  </Fade>
);

export default Title