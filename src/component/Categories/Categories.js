import React, { useState } from "react";
import "./categories.css";
import myData from "../../Data/Data";
import DrawProducts from "./DrawProducts";
// import ShowProduct from "./ShowProducts/ShowProducts";
// import img1 from "../../Data/productsImages/p3.jpg";

function Categories({ handelCounter }) {
  const [data, setData] = useState(myData);
  const filterCats = (catItem) => {
    const res = myData.filter((curData) => {
      return curData.category === catItem;
    });
    setData(res);
  };
  // const handleDispaly = () => {
  //   const x = document.querySelector(".product-info-parent");
  //   x.style.display === "block"
  //     ? (x.style.display = "none")
  //     : (x.style.display = "block");
  // };
  return (
    <> 
     {/* <div className="container product-info-parent">
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
      </div> */}
    {/* <ShowProduct handleDispaly={handleDispaly}/> */}
      <section className="container row content-categroies">
        {/* <h3>Categories</h3>  */}
        <p className="title-section" style={{marginTop:'-20px'}}>Categories </p>
        <div className="btns-card col-lg-3 col-md-12 col-sm-12">
          <button onClick={() => setData(myData)}>all</button>
          <button onClick={() => filterCats("mobile")}>mobiles</button>
          <button onClick={() => filterCats("laptop")}>laptops</button>
          <button onClick={() => filterCats("tv")}>smart TVs</button>
          <button onClick={() => filterCats("mouse")}>wireless mouses</button>
          <button onClick={() => filterCats("keyboard")}>keyboards</button>
          <button onClick={() => filterCats("watch")}>smart watches</button>
          <button onClick={() => filterCats("handfree")}>handfree</button>
          <button onClick={() => filterCats("headphone")}>
            headphones gaming
          </button>
        </div>
        <div className="cat-products col-lg-9 col-md-12 col-sm-12">
          {data.map((item) => {
            return (
              <DrawProducts
                key={item.id}
                item={item}
                handelCounter={handelCounter}
                // handleDispaly={handleDispaly}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Categories;
