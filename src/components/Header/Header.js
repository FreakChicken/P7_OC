import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/LOGO.png";

function Header() {
    return (
        <header className="header">
            <Link to="/">
                <img className="logo" src={Logo} alt="Logo de Kasa" />
            </Link>
            <div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/a-propos">A Propos</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
