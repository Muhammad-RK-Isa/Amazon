import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Shop from './Components/Shop/Shop';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Shop /> }></Route>
      <Route path='/:asinQuery' element={ <ProductDetails /> }></Route>
    </Routes>
  </BrowserRouter>,
);