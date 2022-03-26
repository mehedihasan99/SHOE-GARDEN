import React, { useState } from 'react';
import CardItem from '../CardItem/CardItem';
import './SideCard.css'
const SideCard = (props) => {
    const {sideCard} = props;
    // console.log(sideCard);
    const [chosenItem, setChosenItem] = useState(null);
    console.log(sideCard);
    function chooseOneItem(){
        const randomIndex = Math.floor(Math.random()*sideCard.length);
        setChosenItem(sideCard[randomIndex]);
    }
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
                <button onClick={()=> chooseOneItem()} className='btn btn-primary'>
                    CHOOSE ONE FOR ME
                </button>
                <div>
                    {
                        chosenItem && (
                            <div>
                                <p>{chosenItem.name}</p>
                                {/* <img src={chosenItem.picture} alt="" /> */}
                            </div>
                        )
                    }
                </div>
                <button  className='btn btn-danger mt-3'>
                    CLEAR ITEM
                </button>
            </div>
        </div>
    );
};

export default SideCard;