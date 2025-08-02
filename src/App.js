import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Paintings from "./Components/Paintings";
import Drawings from "./Components/Drawings";
import Artists from "./Components/Artists";
import ContactUs from "./Components/ContactUs";
import SellPaintings from "./Components/SellPaintings";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/paintings' element={<Paintings />} />
        <Route path='/drawings' element={<Drawings />} />
        <Route path='/Artists' element={<Artists />} />
        <Route path='/sellPaintings' element={<SellPaintings />} >
          <Route path="contactUs" element={<ContactUs />}></Route>
        </Route>
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/cart' element={<Cart />} ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
