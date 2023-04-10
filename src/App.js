// @ts-nocheck
import './App.css';
import './rest.css';
import Home from './component/Home/Home';
import { Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import FavList from './component/FavList/FavList';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favList" element={<FavList />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
