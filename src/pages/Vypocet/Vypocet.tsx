import React from 'react';
import { Link } from 'react-router-dom';

export default function Vypocet() {
  return (
    <main>
      <button><Link to="/">back</Link></button>
      <button><Link to="/uzToMam">Už to mam </Link></button>
      <button><Link to="/vypocet2">Jdeme dál!</Link></button>
      <button><Link to="/nevimCoSTim">Nevím co s tím</Link></button>
    </main>
  )
}
