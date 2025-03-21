import React, { useState } from "react";
import Home from "./Home/Home";
import NavbarComp from "./Navbar/Navbar";
import About from "./About/About";
import Contact from "./ConatctUs/Contact";
import Footer from "./Footer/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Categories from "./Categories/Categories";
import Login from "./Forms/Login";
import Register from "./Forms/Register";
import HeaderTitle from "./HeaderTitle/HeaderTitle";
import ShoppingCart from "./Categories/Shopping Cart/ShoppingCart";

function App() {
  const [counter, setCounter] = useState([]);

  const handelCounter = (item) => {
    if (counter.indexOf(item) !== -1) return;
    setCounter([...counter, item]);
  };
  const handleChange = (item, num) => {
    const indx = counter.indexOf(item);
    const arr = counter;
    arr[indx].amount += num;
    if (arr[indx].amount === 0) arr[indx].amount = 1;
    setCounter([...arr]);
  };
  return (
    <>
      <HeaderTitle />
      <NavbarComp size={counter.length} />
      {/* <main className="container"> */}
        <Routes>
          <Route path="/Ecommerce_ReactJS" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/categories"
            element={<Categories handelCounter={handelCounter} />}
          />
          <Route
            path="/shopingCart"
            element={
              <ShoppingCart
                counter={counter}
                setCounter={setCounter}
                handleChange={handleChange} size={counter.length}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </main> */}
      <Footer />
    </>
  );
}

export default App;
