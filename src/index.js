import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandevuAl from './pages/RandevuAl';
import RandevuListe from './pages/RandevuListe';
import RandevuDetail from './pages/RandevuDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:id" element={<RandevuDetail />} />
      <Route path="randevu-al" element={<RandevuAl />} />
      <Route path="randevu-liste" element={<RandevuListe />} />
    </Routes>
  </BrowserRouter>
);
