import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import AboutUs from "./Pages/aboutUsPage/AboutUs";
import ContactUs from "./Pages/contactPage/ContactUs";
import Footer from "./components/footer/Footer";
import Home from "./Pages/homePage/Home";
import NavbarComponent from "./components/navbar/Navbar";
import ProductDetail from "./Pages/productDetails/ProductDetail";
import Products from "./Pages/productsPage/Products";

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
      <Footer />
    </div>
  );
}

export default App;
