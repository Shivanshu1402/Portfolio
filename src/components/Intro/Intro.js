import React from 'react'
import './intro.css';
import image from '../../assets/logo.png' 
import btnImg from '../../assets/hireme.png' 
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section className="intro">
        <div className="intro-content">
            <span className="hello">Hi</span>
            <span className="introtext">I'm <span className="introname">Shivanshu Tripathi</span> <br /> Web Developer</span>
            <p className="intropara"> I'm a pre-final year B.Tech Cse student with a passion for technology and innovation. I love exploring the latest advancements in the tech world and am always eager to learn and apply new skills.</p>
            <Link><button className="btn"><img src={btnImg} className='btnImg' alt="Hire Me" />Hire Me</button></Link>
        </div>
        <img src={image} alt="" className="bg" />
    </section>
  )
}

export default Intro;
