import React, { useState } from 'react';
import CardItem from '../CardItem/CardItem';
import './SideCard.css'
const SideCard = (props) => {
    const {sideCard, clearItems} = props;
    // console.log(clearItems);
    // console.log(sideCard);
    const [chosenItem, setChosenItem] = useState(null);
    // console.log(sideCard);
    function chooseOneItem(){
        const randomIndex = Math.floor(Math.random()*sideCard.length);
        setChosenItem(sideCard[randomIndex]);
    }
    function clearChosenItem1(){
        setChosenItem(null);
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
                <button onClick={()=>  chooseOneItem()} className='btn btn-primary'>
                    CHOOSE ONE FOR ME
                </button>
                <div>
                    {
                        chosenItem && (
                            <div className='chosenItem'>
                                <h6>{chosenItem.name}</h6>
                                <img src={chosenItem.picture} alt="" />
                            </div>
                        )
                    }
                </div>
                <button onClick={()=> {clearItems(); clearChosenItem1()}} className='btn btn-danger mt-3'>
                    CLEAR ITEMS
                </button>
            </div>
        </div>
    );
};

export default SideCard;