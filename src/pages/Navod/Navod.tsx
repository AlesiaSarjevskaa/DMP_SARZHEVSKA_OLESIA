import React from 'react';
import { Link } from 'react-router-dom';

export default function Navod() {
    return (
        <main>
            <h1>Tajný návod na subnetting</h1>
            <button><Link to="/">back</Link></button>
            <button><Link to="/teorie">Teorie sítí</Link></button>
            <button><Link to="/vypocet">Praktické procvičování</Link></button>
        </main>
    );
}
