import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Grout2 from './components/Grout2';
import Description from './components/Description';
import Description2 from './components/Description2';
import Description3 from './components/Description3';
import Description4 from './components/Description4';
import Description5 from './components/Description5';
import DescriptionC215 from './components/DescriptionC215';
import Contact from './components/Contact'
// import Footer from './components/Footer'
import SocialFollow from "./components/SocialFollow"
import Artistes from './components/Artistes';
import Banksy from './components/Banksy';
import Levalet from './components/Levalet';
import Mto from './components/Mto';







function App() {
  return (
  

    <Router>
    <div className='App'>
      <Navbar /> 
    <Routes>
      <Route path="/home" element={<Home />} /> 
      <Route path="/artistes" element={<Artistes />} />
      <Route path="/groot" element={<Image />} />
      <Route path="/groot2" element={<Grout2 />} />
      <Route path="/description" element={<Description />} />
      <Route path="/description2" element={<Description2 />} />
      <Route path="/description3" element={<Description3 />} />
      <Route path="/description4" element={<Description4 />} />
      <Route path="/description5" element={<Description5 />} />
      <Route path="/descriptionC215" element={<DescriptionC215 />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/banksy" element={<Banksy />} />
      <Route path="/levalet" element={<Levalet />} />
      <Route path="/mto" element={<Mto />} />



      </Routes>
    {/* <Footer /> */}
    <SocialFollow />
    </div>
    </Router>
  );
}

export default App;
