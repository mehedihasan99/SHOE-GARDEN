import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import './Product.css'
const Product = ({product, handleAddToCard}) => {
  // console.log(handleAddToCard);
  const { name, price, picture, id } = product;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price: {price}</p>
        </Card.Body>
        <button onClick={() =>{handleAddToCard(product)}} className="product-btn"> 
            Add to Card
            <FontAwesomeIcon className="ms-2" icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </Card>
    </div>
  );
};

export default Product;
