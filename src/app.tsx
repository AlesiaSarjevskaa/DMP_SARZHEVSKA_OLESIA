import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './pages/AppRouter';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root element #root was not found.');
}

createRoot(container).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
