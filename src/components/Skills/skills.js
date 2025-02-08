import React from 'react';
import './skills.css';
import adapt from '../../assets/adapt.jpg';
import creative from '../../assets/creative.png';
import passion from '../../assets/passion.png';
import collab from '../../assets/collaborative.png';
import deter from '../../assets/determined.jpg';
import attn from '../../assets/attention.jpg';

const Skills = () =>{
    return(
        <section id="skills">
            <h2 className="skilltitle">My Softskills</h2>
            <br/>
            <span className="skillcontent">With adaptability and passion, I embrace challenges creatively. I work collaboratively, stay determined through obstacles, and ensure precision with a strong eye for detail</span>
            <br/>
            <div className="skillImgs">
                <img className="skillImg" src={adapt} alt="adapt"/>
                <img className="skillImg" src={passion} alt="passion"/>
                <img className="skillImg" src={creative} alt="creative"/>
                <img className="skillImg" src={collab} alt="collab"/>
                <img className="skillImg" src={deter} alt="determine"/>
                <img className="skillImg" src={attn} alt="attention"/>
            </div>
            <button className="skillbtn">See More</button>
        </section>
    );
}

export default Skills;