
import { BsFillSendFill } from "react-icons/bs";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact=()=>{
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useRef();

   const sendEmail = (e) => {
          e.preventDefault(); 
    
            const serviceID = 'service_8u7vib5';
            const templateID = 'template_2govovn';
            const public_key='y_X9K9AJIGBnyLmtc';

         emailjs.sendForm(serviceID, templateID, form.current, public_key)
                 .then((result) => {
                    console.log('Email sent successfully');
                    setIsSuccess(true);
                 }, (error) => {
                    console.log('Error');
                    });
 };
    return(
        <>
        <section id="contactPage">
        <h3 className="contactPageTitle"> Contact Me </h3>
        <span className="contactDesc"> Please fill out the form below to discuss any work opportunities.</span>
        {isSuccess && (
          <div className="success-message">
            Your email was sent successfully!
          </div>
        )}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name "/>
            <input type="email" className="email" placeholder="Your Email"/>
            <textarea className="msg" name="message" rows="6" placeholder="Your Message"></textarea>
            <button type='submit' value='Send' className="sendBtn">Submit <BsFillSendFill /> </button>
        </form>
        </section>
        </>
    )
}
export default Contact