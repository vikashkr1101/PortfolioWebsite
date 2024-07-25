import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import vkLogoMain from '../vkLogoMain.png';

export default function Header({ theme, toggleTheme }) {
  const hrStyle = {
    backgroundColor: theme === 'light' ? '#282c34' : 'lightgray',
    height: '1px',
    border: 'none',
    margin: '0',
    padding: '0',
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <header className={`header ${theme}`}>
        <img src={vkLogoMain} height={60} width={58} alt="" className="logo" />
        
        <nav>
          <ul>
            <li>
              <NavLink to="#home" onClick={() => scrollToSection('home')} end className="nav-link">
                // home
              </NavLink>
            </li>
            <li>
              <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
                // about me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">
                // skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
                // projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
                // contact
              </a>
            </li>
          </ul>
        </nav>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      <hr style={hrStyle} />
    </section>
  );
}
