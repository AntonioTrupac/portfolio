import React from 'react';
import cardItems from '../cardItems.json';

function Card() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener, noreferrer');
        if (newWindow) {
            newWindow.opener = null
        }
    }

    return (
        <>
            {
                cardItems.map((cardItem) => {
                    return (
                        <div>
                            <h4 className="project__name">{cardItem.name}</h4>
                            <div className="project__description">{cardItem.description}</div>
                            <div className="project__role">{cardItem.role}</div>
                            <div className="project__technologies">{cardItem.technologies}</div>
                        </div>
                    )
                })
            }
        </>
    )


}

export default Card;