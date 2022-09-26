import React, { useState } from "react";
import "./categories.css";
import xx from "../../Data/Data";
import DrawProducts from "./DrawProducts";

function Categories({ handelCounter }) {
  const [data, setData] = useState(xx);

  const filterCats = (catItem) => {
    const res = xx.filter((curData) => {
      return curData.category === catItem;
    });
    setData(res);
  };

  return (
    <>
      <section className="container row content-categroies">
        <div className="btns-card col-3">
          <h3>Categories</h3>
          <button onClick={() => setData(xx)}>all</button>
          <button onClick={() => filterCats("mobile")}>mobiles</button>
          <button onClick={() => filterCats("laptop")}>laptops</button>
          <button onClick={() => filterCats("tv")}>smart TVs</button>
          <button onClick={() => filterCats("mouse")}>wireless mouses</button>
          <button onClick={() => filterCats("keyboard")}>keyboards</button>
          <button onClick={() => filterCats("watch")}>smart watches</button>
          <button onClick={() => filterCats("handfree")}>handfree</button>
          <button onClick={() => filterCats("headphone")}>headphones gaming</button>
        </div>
        <div className="cat-products col-9">
          {data.map((item) => {
            return (
              <DrawProducts
                key={item.id}
                item={item}
                handelCounter={handelCounter}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
export default Categories;
