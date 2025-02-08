import React from 'react';
import './home.css';
import bg from '../../assets/avatar.png';
import hire from '../../assets/hire.png';
import { useTypewriter,Cursor } from 'react-simple-typewriter';


const Home = () =>{
    const [text]= useTypewriter({
        words:['CSE-Student','Problem-Solver','Tech-Enthusiast'],
        loop: {},
        typeSpeed:120,
        deleteSpeed:80,
    });
return(
    <section id="home">
        <div className="introContent">
            <span className="hello"> Hello,<br/><br/></span>
            <span className="introText">This is <span className="introName">Akshaya</span><br/></span>
            <span className="typewriter"> I'm a <span style={{fontWeight:'bold',color:'aqua'}}>{text}</span><span><Cursor/></span></span>
            <br/>
            <button className="btn"><img src={hire} alt="hire" className="btnimg"/>  Hire me</button>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
)

}

export default Home;