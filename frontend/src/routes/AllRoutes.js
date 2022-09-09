import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Home } from "../components/Home/home";
import LoginPage from "../components/Login/Login/LoginPage";
import Reg from "../components/Login/Login/Reg";
import Navbar from "../components/Navbar/Navbar";
import Account from "../components/user/Account";
import AuthContext from "../context/AuthContext";
import { Cart } from "../pages/demo/Cart";
import { Delivery } from "../pages/demo/Delivery";
import { Payment } from "../pages/demo/Payment";
import Success from "../pages/demo/Success";
import MainProducts from "../pages/MainProducts";
import { Products } from "../pages/Products";
import { ProductsDetail } from "../pages/ProductsDetail";

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:main" element={<MainProducts />} />
        <Route path="/product/:main/:category" element={<Products />} />
        <Route
          path="/product/:main/:category/:id"
          element={<ProductsDetail />}
        />
        <Route
          path="/cart"
          element={
            <Cart />
            // <AuthContext>
            // </AuthContext>
          }
        />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
