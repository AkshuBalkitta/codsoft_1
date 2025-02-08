import React, {useRef} from 'react';
import './contact.css';
import lkn from '../../assets/linkedin.png';
import git from '../../assets/git3.jpg';
import insta from '../../assets/insta3.png';
import emailjs from '@emailjs/browser';

const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rrg3efe', 'template_85o6w7y', form.current, {
            publicKey: 'Y9pkD0k9mnacOVoc8',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return(
        <section id="contact">
            <div id="cont">
                <h1 className="contacttitle">Contact Me</h1>
                <br/>
                <span className="contactdesc">Please fill out the form below to discuss any work opportunities</span>
                <br/>
                <br/>
                <form className="contactform" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="from_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                    <textarea name="message" className="msg"rows="5" placeholder="Your Message"></textarea>
                    <br/>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <br/>
                    <div className="links">
                        <img src={lkn} alt="linkedin" className="linkImg"/>
                        <img src={git} alt="github" className="linkImg"/>
                        <img src={insta} alt="insta" className="linkImg"/>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;