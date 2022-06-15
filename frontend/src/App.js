import "./App.css";
import db from "./API/db.json";
import prodEyes from "./API/prodEyes.json";
import { Products } from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Products data={db}></Products> */}
      <Products data={prodEyes}></Products>

      <Footer />
    </div>
  );
}

export default App;
