import "./App.css";
import db from "./API/db.json";
import { Products } from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Products data={db}></Products>
    </div>
  );
}

export default App;
