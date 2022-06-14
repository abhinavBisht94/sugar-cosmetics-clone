import "./App.css";
import db from "./API/db.json";
import { Products } from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Products data={db}></Products> */}
      {/* <Navbar /> */}
      <Footer />
    </div>
  );
}

export default App;
