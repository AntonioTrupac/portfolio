import React from 'react';
import Card from '../components/card';

const MyWork = () => {
    return (
        <>
            <div className='container'>
            <h2 className='header-class'>Projects that I worked on</h2>
            <div className='main-work-container'>
            <div className="my-work-container">
                <Card/>
            </div>
            </div>
            </div>
        </>

    );
};

export default MyWork;