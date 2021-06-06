import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'
import Title from './TitleComponent'

const About = () => {
	return(
		<>
			<NavigationBar />
			<Container>
				<Title title={"About Me"} />
				<Row className="about-wrapper">
					<Col md={6} sm={12}>
						<Fade left duration={1000} delay={600} distance="30px">
							<div className="about-wrapper__image">
								Placeholder for image
							</div>
						</Fade>
					</Col>
          <Col md={6} sm={12}>
            <Fade right duration={1000} delay={600} distance="30px">
              <div>
                Placeholder for informations
              </div>
            </Fade>
          </Col>
				</Row>
			</Container>
		</>
	);
}

export default About;