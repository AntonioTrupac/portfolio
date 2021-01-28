import React from 'react';
import '../stylesheets/Card.css';
import cardItems from '../cardItems.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

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
                        <div key={cardItem.id} onClick={(e) => cardItem.link.length === 0 ? e.preventDefault() : openInNewTab(cardItem.link)} className='card-items-container'>
                            <h4 className="project__name">{cardItem.name}</h4>
                            <div className="project__description">{cardItem.description}</div>
                            <div className="project__role">{cardItem.role}</div>
                            <div className="project__technologies">{cardItem.technologies}</div>
                            {cardItem.link.length === 0 ? '' : <FontAwesomeIcon className="icon icon-right" icon={faLongArrowAltRight} /> }
                        </div>
                    )
                })
            }
        </>
    )


}

export default Card;