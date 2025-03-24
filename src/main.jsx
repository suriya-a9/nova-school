import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Faculty from './components/Faculty/Faculty.jsx';
import Cbse from './components/CBSE/Cbse.jsx';
import Facilities from './components/Facilities/Facilities.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter basename="/nova-school/">
    <Routes>
      <Route path='/app' element={<App />} />
      <Route path='/' element={<Home />} />
      <Route path='/nova-school/faculty' element={<Faculty />} />
      <Route path='/nova-school/cbse' element={<Cbse />} />
      <Route path='/nova-school/facilities' element={<Facilities />} />
      <Route path='/nova-school/about-us' element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
)