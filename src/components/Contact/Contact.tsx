import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
import "./Contact.css";

const phoneNumber = process.env.REACT_APP_PHONE
const email = process.env.REACT_APP_EMAIL

// EmailJS stuff:
const serviceId: any = process.env.REACT_APP_SERVICE_ID
const templateId: any = process.env.REACT_APP_TEMPLATE_ID
const publicKey: any = process.env.REACT_APP_PUBLIC_KEY

function Contact(): JSX.Element {
    const form: any = useRef()
    const rows = 7

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
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
                        <h5>{email}</h5>
                        <a href="mailto:example@gmail.com">Send a Message</a>
                    </div>

                    <div className="contact_option">
                        <WhatsAppIcon className="contact_option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>{phoneNumber}</h5>
                        <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}`} target="_blank">Send a  Message</a>
                    </div>
                </div>

                {/* CONTACT FORM */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="John Doe" required />
                    <input type="email" name="email" placeholder="example@gmail.com" required />
                    <textarea name="message" rows={rows} placeholder="Hello! I am writing to..." required></textarea>
                    <button type="submit" className="button button-primary">Send Message</button>
                </form>
            </div>
        </section >
    );
}

export default Contact;
