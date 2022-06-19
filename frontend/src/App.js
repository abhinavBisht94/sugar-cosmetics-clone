import "./App.css";
import db from "./API/db.json";
import { Products } from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home/home";
import AllRoutes from "./routes/AllRoutes";

function App() {
  // console.log("prodEyes[0]:", prodEyes.dataCategory[0]);

  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
