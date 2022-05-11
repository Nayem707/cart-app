import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from 'react-use-cart';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import Navbarss from '../nav/Navbar';
import About from '../About/About';

function App() {
  return (
    <CartProvider>
      <Navbarss />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Cart' element={<Cart />} />
        <Route path='About' element={<About />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
