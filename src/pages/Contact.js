import React from 'react'
import ContactForm from '../components/form';
import '../stylesheets/Contact.css';

const Contact = () => {
    return(
        <div className='container'>
            <div className='contact-container'>
                <ContactForm/>
            </div>
        </div>
    );
};

export default Contact;