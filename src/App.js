// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';
import Education from './components/Education.js'
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <section id="home">
            <Home theme={theme} />
          </section>
          <hr/>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <br/>
           <hr/>
            <br/>
            <Skills />
          </section>
          <br/><br/><br/>
          <section id="education">
            <br/>
           <hr/>
            <br/>
            <Education />
          </section>
           <hr/>
           <br/>
            <br/><br/>
          <section id="projects">
            <Projects />
            <br/><br/>
           <hr/>
           
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;



