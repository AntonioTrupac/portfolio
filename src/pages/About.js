import React from 'react';
import Doggos from '../images/doggos.jpg';

//motion
import {motion} from 'framer-motion';
import {fadeLeft} from "../Animation";

const About = () => {
    return (
        <>
            <motion.div
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{duration: 0.7}}
                className='about container'>
                <div className='about-content'>
                    <div className='personal'>
                        <h1>About</h1>

                        <p>
                            I am a web developer who is passionate about developing,
                            efficient, scalable, responsive and beautiful web applications and websites.
                        </p>

                        <p>
                            My journey into web development evolved from a desire to make something completely
                            on my own and while I'm at it - to make it look good
                        </p>

                        <p>
                            I have great desire to learn and discover new things, to meet new people
                            and to solve the problems that are set before me.
                        </p>

                        <p>
                            My current work consists of daily usage of technologies like .NET Core, JavaScript, MSSQL database and CSS.
                        </p>
                    </div>

                    <div className='education'>
                        <h1 className='heading2'>Education</h1>

                        <div>
                            <h3>University</h3>
                            <a href="https://vvg.hr/" target='_blank' rel='noreferrer'>University of Applied Sciences Velika Gorica</a>

                            <ul className='uni-ul'>
                                <li>
                                    Bachelor's degree
                                    <ul>
                                        <li>Maintenance of computer systems</li>
                                        <li>2019 - Present</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='picture-container'>
                    <img src={Doggos} alt="doggies"/>
                    <p>I love huskies and malamutes. As u can see I have 2 of them. Smaller one is called Bailey and bigger one is called Freya.</p>
                </div>
            </motion.div>
        </>
    );
};

export default About;
