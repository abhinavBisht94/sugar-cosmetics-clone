import "./App.css";

import db from "./API/db.json";
import prodEyes from "./API/prodEyes.json";
import prodLips from "./API/prodLips.json";

import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/home";

import { Products } from "./pages/Products";
import { ProductsDetail } from "./pages/ProductsDetail";

import Footer from "./components/Footer/Footer";

function App() {
  // console.log("prodEyes[0]:", prodEyes.dataCategory[0]);


  return (
    <div className="App">
      <Navbar />

      {/* <Home /> */}

      <Products data={prodLips}></Products>
      {/* <ProductsDetail allData={prodEyes} data={prodEyes.dataCategory[0]} /> */}

      <Footer />
    </div>
  );
}

export default App;
