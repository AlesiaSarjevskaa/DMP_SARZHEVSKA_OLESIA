import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Game from './Game/Game';
import Home from './Home/Home';

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}
