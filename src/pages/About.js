import React from 'react';
import '../stylesheets/About.css';
import doggos from '../images/doggos.jpeg'
const About = () => {
    return (
        <>

            <div className='about-container'>
                <div className='about-content'>
                    <div>
                    <h1 className="heading">About</h1>
                    <p className='about-paragraph'>
                        I am a web developer who is passionate about developing,
                        efficient, scalable, responsive and beautiful web applications and websites.</p>
                    <p className='about-paragraph'>
                        My journey into web development evolved from a desire to make something completely
                        on my own and while I'm at it - to make it look good
                    </p>
                    <p className='about-paragraph'>
                        I have great desire to learn and discover new things, to meet new people
                        and to solve the problems that are set before me.
                    </p>
                    <p className='about-paragraph'>
                        My current work consists of daily usage of technologies like .NET Core, JavaScript, MSSQL database and CSS.

                    </p>
                    </div>
                    <div>
                        <h1 className='heading2'>Education</h1>
                        <div>
                            <h3 className='heading3'>University</h3>
                            <a className='link' href="https://vvg.hr/">University of Applied Sciences Velika Gorica</a>
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
                    <div className='first-picture-container'>
                    <img className='img1' src={doggos} alt="doggies"/>
                    <p className='picture-paragraph'>
                        I love huskies and malamutes. As u can see I have 2 of them.
                        Smaller one is called Bailey and bigger one is called Freya.
                    </p>
                    </div>
                </div>

            </div>
        </>
    );

};

export default About;