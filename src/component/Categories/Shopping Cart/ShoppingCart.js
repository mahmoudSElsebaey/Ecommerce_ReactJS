import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";

function ShoppingCart({ counter, setCounter, handleChange, size }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = counter.filter((item) => item.id !== id);
    setCounter(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let res = 0;
    counter.map((item) => (res += item.amount * item.price));
    setPrice(res);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <div className="container">
        {size ? (
          <section>
            <h2 className="cart-caption">Your selected products</h2>

            {counter.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img" title={item.name}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
                <div className="cart-btns-control">
                  <button onClick={() => handleChange(item, -1)}>-</button>
                  <button>{item.amount}</button>
                  <button onClick={() => handleChange(item, 1)}>+</button>
                </div>
                <div>
                  <span title="Price">{item.price}</span>
                  <button onClick={() => handleRemove(item.id)} title="Remove">
                    X
                  </button>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total Price</span>
              <span>
                {price} <sup>EGP</sup>
              </span>
            </div>
          </section>
        ) : (
          <div className="no-items">
            <Link to="/Categories">go to shopping</Link>
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
