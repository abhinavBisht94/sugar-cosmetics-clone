import "./App.css";
<<<<<<< Updated upstream

import db from "./API/db.json";
import prodEyes from "./API/prodEyes.json";
import prodLips from "./API/prodLips.json";

import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/home";

import { Products } from "./pages/Products";
import { ProductsDetail } from "./pages/ProductsDetail";

import Footer from "./components/Footer/Footer";
=======
import db from "./API/db.json";
import { Products } from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home/home";
import AllRoutes from "./routes/AllRoutes";
>>>>>>> Stashed changes

function App() {
  // console.log("prodEyes[0]:", prodEyes.dataCategory[0]);


  return (
    <div className="App">
<<<<<<< Updated upstream
      <Navbar />

      {/* <Home /> */}

      <Products data={prodLips}></Products>
      {/* <ProductsDetail allData={prodEyes} data={prodEyes.dataCategory[0]} /> */}

      <Footer />
=======
      <AllRoutes />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
