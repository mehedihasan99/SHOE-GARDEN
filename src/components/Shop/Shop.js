import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import SideCard from '../SideCard/SideCard';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [sideCard, setSideCard] = useState([]);
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])

    function handleAddToCard(product){
      const newCard = [...sideCard, product];
      setSideCard(newCard);
    }
    function clearItems(){

    }
    console.log(sideCard);
    return (
        <div className='shop-container'>
           <Container fluid>
             <div className="row">
                <div className="col-md-8">
                    <div className="product-container">
                        {
                            products.map(product => <Product product ={product}
                            key = {product.id}
                            handleAddToCard = {handleAddToCard}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                  <div className="sideCard-container">
                    <div>
                    <SideCard sideCard = {sideCard}/>
                  </div>
                  </div>
                </div>
             </div>
           </Container>
        </div>
    );
};

export default Shop;