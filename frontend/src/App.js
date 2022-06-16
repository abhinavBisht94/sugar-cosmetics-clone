import './App.css'
import db from './API/db.json'
import { Products } from './pages/Products'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Home } from './components/Home/home'

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Products data={db}></Products> */}
      {/* <Navbar /> */}
      <Home />
      <Footer />
    </div>
  )
}

export default App
