import React from 'react';
import Card from '../components/card';

//motion
import {motion} from 'framer-motion';
import {fadeAbove, fadeRight} from "../Animation";

const MyWork = () => {
    return (
        <div>
            <div className='container'>
            <motion.h2
                variants={fadeAbove}
                initial='hidden'
                animate='visible'
                transition={{duration: 0.7}}
                className='header-class'>Projects that I worked on</motion.h2>
            <div className='main-work-container'>
            <div className="my-work-container">
                <Card/>
            </div>
            </div>
            </div>
        </div>

    );
};

export default MyWork;