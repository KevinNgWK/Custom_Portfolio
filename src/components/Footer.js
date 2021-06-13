import React from 'react';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';

const Footer = (props) => {
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="person" smooth duration={400}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {props.networks.map((network) => {
            const { id, name, url } = network;
            return (
              <a key={id} href={url} rel="noopener noreferrer" target="blank" aria-label={name}>
                <i className={`fa fa-${name} fa-inverse`} />
              </a>
            )
          })}
        </div>
        <hr />
        <p className="footer__text">
          You can also reach me at these sites!
        </p>
      </Container>
    </footer>
  );
}

export default Footer;