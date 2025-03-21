import React from "react";

function DrawProducts({ item, handelCounter }) {
  const { id, name, price, image } = item;
  const handleName = (name) => {
    console.log(name);
  };
  return (
    <div className="card-parent" key={id}>
      <div className="card-img">
        <img src={image} alt={name} />
        <div className="card-overlay">
          <div className="card-overlay-content">
            <div className="card-overlay-icons">
              <i className="far fa-eye"></i>
              <i className="fas fa-search"></i>
              <i className="fas fa-heart"></i>
            </div>
            <button onClick={() => handelCounter(item)}>
              <i className="fas fa-cart-plus"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
      <div className="card-info">
        <div className="card-title">
          <h3>{name}</h3>
        </div>
        <div className="card-price">
          <p>EGP {price}.00</p>
          <span>EGP {price + price * 0.12}.00</span>
          <span>-12%</span>
        </div>
        <div className="card-target-stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
      </div>
    </div>
  );
}
export default DrawProducts;
