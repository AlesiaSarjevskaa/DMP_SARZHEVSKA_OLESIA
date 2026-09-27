import React from 'react';
import { Link } from 'react-router-dom';

export default function Teorie() {
    return (
        <main>
            <h1>TEORIE SÍTÍ</h1>
            <button><Link to="/">back</Link></button>
            <button><Link to="/navod">Tajný návod na subnetting</Link></button>
            <button><Link to="/vypocet">Praktické procvičování</Link></button>
        </main>
    );
}
