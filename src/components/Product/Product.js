import React from "react";
import { Card } from "react-bootstrap";

const Product = (props) => {
  // console.log(props.product);
  const { name, price, picture, id } = props.product;
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>Price: {price}</p>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Product;
