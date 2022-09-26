import React from "react";
import { Card } from "react-bootstrap";

const CardNewProducts = ({ imgSrc, title, price }) => {
  return (
    <>
      <Card className=" card-style card-newProduct overflow-hidden h-100">
        <span className="product-new">New</span>
        <div className="card-image  overflow-hidden rounded bg-light p-0">
          <Card.Img variant="top" src={imgSrc} />
        </div>
        <Card.Body className="card-body">
          <Card.Title>{title}</Card.Title>
          <Card.Title>EGP {price}.00</Card.Title>
          <Card.Title>
            <span>EGP {parseInt(price) + price * 0.12}.00</span>
            <span>-12%</span>
          </Card.Title>
          <div className="card-target-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
        </Card.Body>
        {/* <Button className="w-100 rounded-0" variant="primary">
          Add To Cart
        </Button> */}
      </Card>
    </>
  );
};

export default CardNewProducts;
