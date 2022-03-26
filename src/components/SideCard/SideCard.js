import React from 'react';
import CardItem from '../CardItem/CardItem';
import './SideCard.css'
const SideCard = (props) => {
    const {sideCard} = props;
    return ( 
        <div className='sideCard'>
            <h4>SELECT SHOES</h4>
            {
                sideCard.map(cardItem => <CardItem 
                    cardItem ={cardItem}
                    key ={cardItem.id}
                ></CardItem>)
            }
            <div className='d-flex flex-column mt-4'>
                <button className='btn btn-primary'>
                    CHOOSE ONE FOR ME
                </button>
                <button className='btn btn-danger mt-3'>
                    CLEAR ITEM
                </button>
            </div>
        </div>
    );
};

export default SideCard;