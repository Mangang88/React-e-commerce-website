import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OurStore from "./components/OurStore";
import Blog from "./components/Blogs";
import BlogCard from "./components/BlogCard";
import CompareProduct from "./components/CompareProduct";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import Forgotpassword from "./components/Forgotpassword";
import Signup from "./components/Signup";
import Resetpassword from "./components/Resetpassword";
import SingleBlog  from "./components/SingleBlog";
import PrivacyPolicy  from "./components/PrivacyPolicy";
import RefundPolicy  from "./components/RefundPolicy";
import ShippingPolicy  from "./components/ShippingPolicy";
import TermAndConditions  from "./components/TermAndConditions";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="header" element={<Header />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path=":id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndConditions />} />
            
          </Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
