import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./components/Home";
import Header from './components/Header';
import Footer from "./components/Footer";
import App from "./App";




const Rout = () => {
    return (
       <Routes>
            <Route path="/" element={<Home/>}/>
       </Routes>
    );
};



function Main() {
    return (
      <BrowserRouter>
        <Header/>
        <Rout/>
        <App/>
        <Footer/>
      </BrowserRouter>
    );
  }
  
  export default Main;
  