import React from "react";
import '../styles/header.css'
import Map from '../img/icons8-world-100.png'

export default function Header() {
    return (
        <header className="header-container">
            <img src={Map} alt="map monde" width="28px"/>
            <h1 className="header-title">my travel journal.</h1>
        </header>
    )
}