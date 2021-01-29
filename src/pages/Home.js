import React from 'react';
import {Link} from 'react-router-dom'


const Home = () => {
        return (
            <>
                <div className='container'>
                    <div className='homepage'>
                        <h2 className='homepage-greeting'>Hi, I'm Antonio.</h2>
                        <h1 className='homepage-profession'>based in Karlovac, Croatia.</h1>
                        <p className='homepage-paragraph'>Software developer who loves to code with his music on. <span>Currently working at <a
                            href="https://bitlight.dev/">Bitlight</a>.</span>
                        </p>
                        <Link to='/about' className='homepage-link'><p><a href>Learn more</a><span
                            className='chevron-span'><i className="fa fa-chevron-right"></i></span></p></Link>
                    </div>
                </div>
            </>
        )
};

export default Home;