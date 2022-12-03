import React from "react";
import { useState } from "react";
import "./Carrousel.scss";
import right_vector from "../../assets/right_vector.png";
import left_vector from "../../assets/left_vector.png";

// Composant Carrousel, modulable dans ses images affichables
function Carrousel({ pictures, id }) {
    // Initialisation du hook "useState"
    const [currentPicture, changePicture] = useState(0);

    /* Fonction permettant d'incrémenter l'image tout en revenant à la première en cas de fin de cycle,
    on écrit "picturesNumber -1" car contrairement à "currentPicture" ce n'est pas un tableau qui commence de 0 */
    const nextPicture = () => {
        changePicture(
            currentPicture === pictures.length - 1 ? 0 : currentPicture + 1
        );
    };
    // Fonction permettant de décrémenter l'image tout en revenant à la dernière en cas de fin de cycle
    const previousPicture = () => {
        changePicture(
            currentPicture === 0 ? pictures.length - 1 : currentPicture - 1
        );
    };

    // Condition pour gérer le cas ou l'appartement n'a pas d'image...
    if (pictures.length === 0) {
        return <p className="carrousel noPictures">Pas d'image disponible</p>;
    }

    return (
        <div className="carrousel">
            {pictures.length > 1 ? (
                //affichage des chevrons et du numéro de la photo si il y en a plus d'une
                //utilisation de fragment pour retourner de mutliples composants sans avoir à ajouter de composant parent
                <>
                    <img
                        className="right_vector"
                        onClick={nextPicture}
                        src={right_vector}
                        alt="fleche directionnelle"
                    />
                    <img
                        className="left_vector"
                        onClick={previousPicture}
                        src={left_vector}
                        alt="fleche directionnelle"
                    />
                    <p className="picture_number">
                        {currentPicture + 1}/{pictures.length}
                    </p>
                </>
            ) : null}

            {pictures.map((photos, index) => {
                // Affichage de l'image correspondante à l'itération en cours
                return (
                    <div
                        className={
                            index === currentPicture ? "active" : "inactive"
                        }
                        key={photos + index + id}
                    >
                        {index === currentPicture ? (
                            <img
                                className="carrousel_image"
                                src={photos}
                                alt="Photos du logement"
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}

export default Carrousel;
