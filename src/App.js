// import logo from './logo.svg';
// import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Routes
} from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation";
import Footer from "./components/footer";
import Home from "./pages/home"
import About from "./pages/about";
import Technology from "./pages/technology";
// import Contact from "./pages/contact";
import SmoothScroll from "smooth-scroll";
import WebDevelopment from './pages/Web-development';
import DigitalMarketing from './pages/digital-marketing'
import Android from './pages/android'
import Ios from './pages/ios'
import Flutter from './pages/flutter'
import Magento from './pages/magento'
import Wordpress from './pages/wordpress'
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
const App = () => {

  return (
    <div>
      <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/technology' element={< Technology />}></Route>
        <Route exact path='/web-development' element={< WebDevelopment />}></Route>
        <Route exact path='/digital-marketing' element={< DigitalMarketing />}></Route>
        <Route exact path='/android' element={< Android />}></Route>
        <Route exact path='/ios' element={< Ios />}></Route>
        <Route exact path='/flutter' element={< Flutter />}></Route>
        <Route exact path='/magento' element={< Magento />}></Route>
        <Route exact path='/wordpress' element={< Wordpress />}></Route>
        {/* <Route exact path='/contact-us' element={<Contact />}></Route> */}
      </Routes>
      <Footer />
      </Router>
    </div>
  );
};

export default App;
