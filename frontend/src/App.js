import "./App.css";
import db from "./API/db.json";
import { Products } from "./pages/Products";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      {/* <Products data={db}></Products> */}
      <Navbar />
    </div>
  );
}

export default App;
