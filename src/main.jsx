import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Faculty from './components/Faculty/Faculty.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <BrowserRouter>
    <Routes>
      <Route path='/app' element={<App />} />
      <Route path='/' element={<Home />} />
      <Route path='/faculty' element={<Faculty />} />
    </Routes>
  </BrowserRouter>
)
