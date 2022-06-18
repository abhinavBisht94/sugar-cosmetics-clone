import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { Home } from "../components/Home/home";
import Products from "../components/Home/products";
import LoginPage from "../components/Login/Login/LoginPage";
import Reg from "../components/Login/Login/Reg";
import Navbar from "../components/Navbar/Navbar";
import Account from "../components/user/Account";

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
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
