import './App.css'
import Body from './components/Body';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {

  return (
    <div>  
      <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Body/>}></Route>
          <Route exact path="/comp1" element={<Comp1/>}></Route>
          <Route exact path="/comp2" element={<Comp2/>}></Route>
      </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
