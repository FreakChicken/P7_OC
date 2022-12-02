//import { Link } from "react-router-dom";
import React from "react";
import "./Footer.scss";
import Logo_footer from "../../assets/logo_BnW.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <Link to={"/"}>
                <img className="logo" src={Logo_footer} alt="Logo de Kasa" />
            </Link>
            <p className="txt">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
