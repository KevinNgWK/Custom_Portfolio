import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'
import Title from './TitleComponent'


const Education = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Title title={"Education Background"} />
      </Container>
    </>
  )
}

export default Education;