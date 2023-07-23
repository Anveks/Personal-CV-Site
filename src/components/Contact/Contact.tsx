import "./Contact.css";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

function Contact(): JSX.Element {
    const form: any = useRef()
    const rows = 7

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                {/* EMAIL and WHATSAPP */}
                <div className="contact_options">
                    <div className="contact_option">
                        <AlternateEmailIcon className="contact_option-icon" />
                        <h4>Email</h4>
                        <h5>example@gmail.com</h5>
                        <a href="mailto:example@gmail.com">Send a Message</a>
                    </div>

                    <div className="contact_option">
                        <WhatsAppIcon className="contact_option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>000-000-00-00</h5>
                        <a href="https://api.whatsapp.com/send?phone=00000000" target="_blank">Send a  Message</a>
                    </div>
                </div>

                {/* CONTACT FORM */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder="John Doe" required />
                    <input type="email" placeholder="example@gmail.com" required />
                    <textarea name="message" rows={rows} placeholder="Hello! I am writing to..." required></textarea>
                    <button type="submit" className="button button-primary">Send Message</button>
                </form>
            </div>
        </section >
    );
}

export default Contact;
