import React, { useState } from 'react';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Person from './components/Person';
import Footer from './components/Footer';
import Contact from './components/Contact';
import { PersonData, AboutData, ExperiencesData, ProjectsData, contactData, NetworkData } from './data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss'

// https://www.foliolink.com/index.asp  -  trying to follow similar design to this website
// https://github.com/cobidev/gatsby-simplefolio

function App() {
  const [person, setPerson] = useState({...PersonData});
  const [about, setAbout] = useState({...AboutData});
  const [experiences, setExperience] = useState([...ExperiencesData]);
  const [projects, setProjects] = useState([...ProjectsData]);
  const [contact, setContact] = useState({...contactData});
  const [networks, setNetworks] = useState([...NetworkData]);

  return (
    <>
      <Person person={person} />
      <About about={about} />
      <Experiences experiences={experiences} contact={contact} />
      <Projects projects={projects} contact={contact} />
      <Contact contact={contact} />
      <Footer networks={networks}/>
    </>
  );
}

export default App;
