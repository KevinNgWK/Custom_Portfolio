import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import About from './components/AboutComponent';
import Experiences from './components/ExperiencesComponent';
import Projects from './components/ProjectsComponent';
import { PersonData, AboutData, ExperiencesData, ProjectsData, contactData } from './data/data';

// https://www.foliolink.com/index.asp  -  trying to follow similar design to this website

function App() {
  const [person, setPerson] = useState({...PersonData});
  const [about, setAbout] = useState({...AboutData});
  const [experiences, setExperience] = useState([...ExperiencesData]);
  const [projects, setProjects] = useState([...ProjectsData]);
  const [contact, setContact] = useState({...contactData});

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/experience" component={() => <Experiences experiences={experiences}/>} />
        <Route path="/projects" component={() => <Projects projects={projects} />} />
        <Redirect to="/about" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
