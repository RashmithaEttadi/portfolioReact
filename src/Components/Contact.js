
import { BsFillSendFill } from "react-icons/bs";
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const Contact=()=>{
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useRef();

   const sendEmail = (e) => {
          e.preventDefault(); 
    
            const serviceID = 'service_lsbox6m';
            const templateID = 'template_q20tncj';
            const public_key='a99KEihE5hZ0Q5j97';

         emailjs.sendForm(serviceID, templateID, form.current, public_key)
                 .then((result) => {
                    console.log('submission successful');
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
           Your submission successful!
          </div>
        )}
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" id="text" name="text" className="name" placeholder="Your Name "/>
            <input type="email" id="email" name="email" className="email" placeholder="Your Email"/>
            <textarea className="msg" id="message" name="message" rows="6" placeholder="Your Message"></textarea>
            <button type='submit' value='Send' className="sendBtn">Submit <BsFillSendFill /> </button>
        </form>
        </section>
        </>
    )
}
export default Contact