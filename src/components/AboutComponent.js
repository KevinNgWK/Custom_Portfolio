import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavBarComponent'

const About = () => {
	return(
		<>
			<NavigationBar />
			<Container>
				<Fade bottom duration={1000} delay={300} distance="0px">
					<h2 className="section-title">temporary title</h2>
				</Fade>
				<Row className="about-wrapper">
					<Col md={6} sm={12}>
						<Fade bottom duration={1000} delay={600} distance="30px">
							<div className="about-wrapper__image">
								<p>temporary image</p>
							</div>
						</Fade>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default About;