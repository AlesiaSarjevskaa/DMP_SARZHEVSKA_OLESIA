import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Vypocet from './Vypocet/Vypocet';
import Home from './Home/Home';
import Teorie from './Teorie/Teorie';
import Navod from './Navod/Navod';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vypocet" element={<Vypocet />} />
        <Route path="/teorie" element={<Teorie />} />
        <Route path="/navod" element={<Navod />} />
      </Routes>
    </HashRouter>
  );
}
