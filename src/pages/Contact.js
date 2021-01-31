import React from 'react'
import ContactForm from '../components/form';
import {fadeLeft} from "../Animation";
import {motion} from "framer-motion";

const Contact = () => {
    return (
        <motion.div
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{duration: 0.7}}
            className='container flex-div'>
            <ContactForm/>
        </motion.div>
    );
};

export default Contact;