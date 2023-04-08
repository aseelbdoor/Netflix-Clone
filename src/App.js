// @ts-nocheck
import './App.css';
import './rest.css';
import Home from './component/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
