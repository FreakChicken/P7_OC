//import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo_footer from "../../assets/logo_BnW.png";

function Footer() {
    return (
        <footer className="footer">
            <img className="logo" src={Logo_footer} alt="Logo de Kasa" />
            <p className="txt">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
