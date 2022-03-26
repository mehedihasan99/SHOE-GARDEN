import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CardItem.css'
const CardItem = ({cardItem}) => {
    // console.log(cardItem);
    const {picture, name} = cardItem;
    return (
        <div>
            <div className="sideCardFlex">
                <div className="img-part">
                    <img src={picture} alt="" />
                </div>
                <div className="name-part">
                    <h3>{name}</h3>
                </div>
                <div className="icon-part">
                    <FontAwesomeIcon className='ms-4' icon={faTrashCan}></FontAwesomeIcon>
                </div>
            </div>
        </div>
    )
};

export default CardItem;