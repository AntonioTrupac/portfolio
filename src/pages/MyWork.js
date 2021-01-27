import React from 'react';
import '../stylesheets/MyWork.css';
import Card from '../components/card';

const MyWork = () => {
    return (
        <>
            <h2>Projects that I worked on</h2>

            <div className="projects">
                <Card/>
            </div>
        </>

    );
};

export default MyWork;