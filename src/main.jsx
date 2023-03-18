import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Components/Shop/Shop'
import './index.css'
import Header from './Components/Header/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Shop />}></Route>
    </Routes>
  </BrowserRouter>,
)
