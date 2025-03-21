import React from "react";
import img1 from "../../../Data/productsImages/p3.jpg";

function ShowProduct({ handleDispaly }) {
  const x = document.querySelector(".product-info-parent");
  x.style.display = "none";
  return (
    <>
      <div className="container product-info-parent">
        <button className="btn btn-danger" onClick={handleDispaly}>
          X
        </button>
        <div className="info-img">
          <img src={img1} alt="my image" className="showImg" />
        </div>
        <div className="info-content">
          <h3>The Name Of Product</h3>
          <p>
            information about this product information about this product
            information about this product information about this product
          </p>

          <div className="card-price">
            <p>EGP {1000}.00</p>
            <span>EGP {1000 + 1000 * 0.12}.00</span>
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
    </>
  );
}

export default ShowProduct;
