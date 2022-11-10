import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/Apropos">A Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
