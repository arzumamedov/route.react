import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >

        <Route path="/" element={<HomePage/>}/>
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Details/:id" element={<Details/>}/>


        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App