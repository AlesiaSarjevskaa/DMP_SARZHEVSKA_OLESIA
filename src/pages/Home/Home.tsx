import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main>
      <h1>SUBNETOVACÍ PORTAL</h1>
      <button><Link to="/teorie">Teorie sítí</Link></button>
      <button><Link to="/navod">Tajný návod na subnetting</Link></button>
      <button><Link to="/vypocet">Praktické procvičování</Link></button>
    </main>
  );
}
