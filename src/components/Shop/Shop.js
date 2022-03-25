import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return (
        <div>
           <Container fluid>
             <div className="row">
                <div className="col-md-8">
                    <div className="product-container">
                        {
                            products.map(product => <Product product ={product}
                            key = {product.id}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                  <div>
                    <h2>card</h2>
                  </div>
                </div>
             </div>
           </Container>
        </div>
    );
};

export default Shop;