import React from "react";
import { useState } from "react";
import "./Carrousel.scss";
import right_vector from "../../assets/right_vector.png";
import left_vector from "../../assets/left_vector.png";

// Composant Carrousel, modulable dans ses images affichables
function Carrousel({ pictures, id }) {
    // Initialisation du hook "useState"
    const [currentPicture, changePicture] = useState(0);
    const picturesNumber = pictures.length;

    /* Fonction permettant d'incrémenter l'image tout en revenant à la première en cas de fin de cycle,
    on écrit "picturesNumber -1" car contrairement à "currentPicture" ce n'est pas un tableau qui commence de 0 */
    const imageSuivante = () => {
        changePicture(
            currentPicture === picturesNumber - 1 ? 0 : currentPicture + 1
        );
    };
    // Fonction permettant de décrémenter l'image tout en revenant à la dernière en cas de fin de cycle
    const imagePrecedente = () => {
        changePicture(
            currentPicture === 0 ? picturesNumber - 1 : currentPicture - 1
        );
    };

    // Condition pour gérer le cas ou l'appartement n'a pas d'image...
    if (picturesNumber === 0) {
        return <p className="carrousel noPictures">Pas d'image disponible</p>;
    }

    // ... Une seule ...
    if (picturesNumber === 1) {
        return (
            <div className="carrousel">
                {pictures.map((photos, index) => {
                    return (
                        <div
                            className={
                                index === currentPicture ? "active" : "inactive"
                            }
                            key={photos + index + id}
                        >
                            {index === currentPicture && (
                                <img
                                    className="carrousel_image"
                                    src={photos}
                                    alt="Photos du logement"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }

    // ... Ou plus d'une
    else {
        return (
            <div className="carrousel">
                <img
                    className="right_vector"
                    onClick={imageSuivante}
                    src={right_vector}
                    alt="fleche directionnelle"
                />
                <img
                    className="left_vector"
                    onClick={imagePrecedente}
                    src={left_vector}
                    alt="fleche directionnelle"
                />
                <p className="picture_number">
                    {currentPicture + 1}/{picturesNumber}
                </p>

                {pictures.map((photos, index) => {
                    // Affichage de l'image correspondante à l'itération en cours
                    return (
                        <div
                            className={
                                index === currentPicture ? "active" : "inactive"
                            }
                            key={photos + index + id}
                        >
                            {index === currentPicture && (
                                <img
                                    className="carrousel_image"
                                    src={photos}
                                    alt="Photos du logement"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Carrousel;
