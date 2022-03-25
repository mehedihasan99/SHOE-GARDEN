import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Card } from "react-bootstrap";
import './Product.css'
const Product = (props) => {
  // console.log(props.product);
  const { name, price, picture, id } = props.product;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price: {price}</p>
        </Card.Body>
        <button className="product-btn"> 
            Add to Card
            <FontAwesomeIcon className="ms-2" icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </Card>
    </div>
  );
};

export default Product;
