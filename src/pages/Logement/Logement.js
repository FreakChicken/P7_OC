import React from "react";
import AppartInfo from "../../components/AppartInfo/AppartInfo";
import Carrousel from "../../components/Carrousel/Carrousel";
import { useParams } from "react-router-dom";
import data from "../../data/apartments.json";
import "./Logement.scss";
import { Navigate } from "react-router-dom";

function Logement() {
    //définition des data de l'appartement concerné
    const { id } = useParams();
    const matchingAppart = data.find((appart) => appart.id === id);
    // Condition pour gérer le cas ou l'id est incorrect afin de renvoyer vers la page d'erreur avec "Navigate" de React Router
    if (matchingAppart === undefined) {
        return <Navigate to="/404" replace={true} />;
    }
    return (
        <div className="page_layout">
            <div className="carrousel_wrapper">
                <Carrousel pictures={matchingAppart?.pictures} id={id} />
            </div>
            <div>
                <AppartInfo data={matchingAppart} id={id} />
            </div>
        </div>
    );
}

export default Logement;
