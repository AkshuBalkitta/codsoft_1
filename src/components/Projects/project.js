import React from 'react';
import webd from '../../assets/webd5.jpg'
import java from '../../assets/java3.jpg'
import webd2 from '../../assets/webd4.jpg'
import figma from '../../assets/figma.png'
import './project.css';
const Project = () =>{
    return(
        <section id="project">
            <div id="proj">
                <h1 className="projtitle">My Projects</h1>
                <br/>
                <p className="projdesc">A showcase of practical and innovative solutions crafted through code, reflecting creativity, technical skills, and a passion for problem-solving</p>
                <br/>
                <br/>
                <div className="projImgs">
                    <div><img src={webd} alt="webd" className="projImg"/><div className="desc"><div className="head">Netflix Clone</div>A web-based Netflix UI replica using HTML,CSS,JS showcasing responsive design and interactive features</div></div>
                    <div><img src={webd2} alt="webd2" className="projImg"/><div className="desc"><div className="head">To-Do List</div>A functional task managemnet app enabling users to add,edit and delete  tasks</div></div>
                    <div><img src={java} alt="java" className="projImg"/><div className="desc"><div className="head">Connect 4 game</div>A Java-based console game implementing the classic two player Connect 4 strategy</div></div>
                    <div><img src={figma} alt="figma" className="projImg"/><div className="desc"><div className="head">Myntra Page Design</div>A Figma based prototype of Myntra e-commerce platform app focusing on UI/UX principles</div></div>
                </div>
            </div>
        </section>
    );
}

export default Project;