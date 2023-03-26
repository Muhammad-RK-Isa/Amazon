import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './Components/Shop/Shop';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Cart from './Components/Cart/Cart';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <Header/>
    <ScrollToTop />
    <Routes>
      <Route path='/' element={ <Shop /> }></Route>
      <Route path='/:asinQuery' element={ <ProductDetails/> }></Route>
      <Route path='/cart' element={ <Cart /> }></Route>
    </Routes>
  </BrowserRouter>,
);