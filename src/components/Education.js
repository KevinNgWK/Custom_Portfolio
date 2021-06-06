import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavBar'
import Title from './Title'


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