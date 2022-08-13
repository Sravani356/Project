import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/aboutUsPage/AboutUs";
import ContactUs from "./Pages/contactPage/ContactUs";
import Home from "./Pages/homePage/Home";
import NavbarComponent from "./components/navbar/Navbar";
// import ProductDetailPage from './Pages/ProductDetailPage';
import Products from "./Pages/productsPage/Products";
import ProductDetail from "./Pages/productDetails/ProductDetail";
// import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about-us/content" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="productDetail/:id"
            element={<ProductDetail />}
          />
          <Route
            path="products/productDetail/:id"
            element={<ProductDetail />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
