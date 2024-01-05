import React from "react";
import './Navbar.css';

export function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                <span className="line line1" />
                <span className="line line2" />
                <span className="line line3" />
                </div>
                <ul className="menu-items">
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/Asignaturas">Asignaturas</a>
                </li>
                <li>
                    <a href="/Ect">Contact</a>
                </li>
                </ul>
                <h1 className="logo">Navbar</h1>
            </div>
        </nav>
    );
}
