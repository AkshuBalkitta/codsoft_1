import React from 'react';
import './about.css';
import code from'../../assets/code.png';
import wdev from '../../assets/wdev3.png';
import uiux from '../../assets/uiux2.png';

const About = () =>{
    return(
        <section id="about">
            <span className="title">What I do</span>
            <span className="description">I'm an enthusiastic college student with keen interest in web development,data analytics and programming</span>
            <div className="skillbars">
                <div className="skillbar">
                    <img src={code} alt="code" className="skillimg"/>
                    <div className="skilltext">
                        <h2>Competitive Programming</h2>
                        <br/>
                        <p>Crafting efficient algorithms and solving complex problems under time constraints</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={wdev} alt="wdev" className="skillimg"/>
                    <div className="skilltext">
                        <h2>Web Development</h2>
                        <br/>
                        <p>Building dynamic, responsive, and user-friendly web applications using modern technologies</p>
                    </div>
                </div>
                <div className="skillbar">
                    <img src={uiux} alt="uiux" className="skillimg"/>
                    <div className="skilltext">
                        <h2>UI/UX Design</h2>
                        <br/>
                        <p>Designing intuitive user interfaces and enhancing user experiences with thoughtful, user-centric design</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;