import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Vypocet from './Vypocet/Vypocet';
import Home from './Home/Home';
import Teorie from './Teorie/Teorie';
import Navod from './Navod/Navod';
import Vypocet2 from './Vypocet2/Vypocet2';
import UzToMam from './UzToMam/UzToMam';
import NevimCoSTim from './NevimCoSTim/NevimCoSTim';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vypocet" element={<Vypocet />} />
        <Route path="/teorie" element={<Teorie />} />
        <Route path="/navod" element={<Navod />} />
        <Route path="/vypocet2" element={<Vypocet2 />} />
        <Route path="/uzToMam" element={<UzToMam />} />
        <Route path="/nevimCoSTim" element={<NevimCoSTim />} />
      </Routes>
    </HashRouter>
  );
}
