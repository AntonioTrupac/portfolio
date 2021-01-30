import React from 'react';
import Items from '../cardItems/items.json';
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
                Items.map((cardItem) => {
                    return (
                        <div key={cardItem.id} onClick={(e) =>
                            cardItem.link.length === 0 ? e.preventDefault() : openInNewTab(cardItem.link)}
                             className='card-items-container'>
                            <h4 className="card_items__name">{cardItem.name}</h4>
                            <div className="card_items_font">{cardItem.description}</div>
                            <div className="card_items_font">{cardItem.role}</div>
                            <div className="card_items_font">{cardItem.technologies}</div>
                            {cardItem.link.length === 0 ? '' : <FontAwesomeIcon className="icon icon-right"
                                                                                icon={faLongArrowAltRight} /> }
                        </div>
                    )
                })
            }
        </>
    )


}

export default Card;