import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Accordion, Card } from 'react-bootstrap';
import Title from './Title'
import Experiences from './Experiences';

const MainSkillsBar = (props) => {
  return (
    <div style={{marginBottom:"1rem"}}>
      <h3 className="skills-wrapper__text-title">{props.name}</h3>
      <div className="skills-wrapper__bar-main">
        <div className="skills-wrapper__bar-filling skills-wrapper__bar-text" style={{width:`${props.percentage}%`}}>
          {props.percentage}%
        </div>
      </div>
    </div>
  );
}

const Skills = (props) => {
  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title={"My Skills"} />
          {props.mainSkills.map((skill, index) => {
            return (
              <Fade bottom duration={800} delay={index*200 + 200} distance="30px">
                <MainSkillsBar name={skill.name} percentage={skill.percentage} />
              </Fade>
            )
          })}
          <Fade bottom duration={800} delay={props.mainSkills.length*200 + 200} distance="30px">
            <h3 className="skills-wrapper__text-title" style={{paddingTop:"2rem"}}>
              Other skills that I am exposed to:
            </h3>
            <div className="skills-wrapper__text-subtitle">
              {props.otherSkills.join(', ')}
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
}

export default Skills;