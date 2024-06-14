import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import PageNotFound from "./Pages/PageNotFound";
import ProductDetail from "./Pages/ProductDetail";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Skill from "./Pages/Skill";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="*" element={<PageNotFound />} />

          <Route path="/about" element={<About />}>
            <Route path="skill" element={<Skill />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
