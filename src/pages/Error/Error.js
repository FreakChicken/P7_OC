import { Link } from "react-router-dom";
import "./Error.scss";

function Error() {
    return (
        <div className="error_div">
            <h1 className="error_404">404</h1>
            <p className="error_txt">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link className="error_link" to="/">
                Retourner sur la page d’accueil
            </Link>
        </div>
    );
}

export default Error;
