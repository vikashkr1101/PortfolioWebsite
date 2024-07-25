import React from 'react'
import './Home.css'
import profile from'../Inst2.jpg'
import { useState } from 'react'
import pphoto from '../mtphoto4.jpg'
import Skills from './Skills'


export default function Home({ theme }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className={`home-container ${theme}`}>
      <div className='image-container'>
       <div className="left-image">
        <img src={profile} alt="Image 1" className={`image left-image glow1 ${hovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}/>
      </div>
      <div className="right-image">
        <img src={pphoto} alt="Image 2" className={`image right-image glow2 ${hovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}/>
      </div>
      </div>
      <div className="info-container">
        <h3> Hello! I'm </h3>
        <h1><b> &lt; VIKASH KUMAR &gt;</b> </h1>
        <p> 
        a master of Computer Applications (MCA) student and a passionate coder with a strong interest 
        in Java development and full-stack web development.
          I enjoy creating web applications and learning new technologies. Welcome to my portfolio!
        </p>
        <p> Welcome to my portfolio!</p>
      </div>
    </div>
  );
}

