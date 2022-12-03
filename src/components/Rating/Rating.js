import React from "react";
import "./Rating.scss";
import grey_star from "../../assets/grey_star.png";
import red_star from "../../assets/red_star.png";

// Composant Rating, modulable selon le tableau d'éléments à noter et la note maximale voulue
function Rating({ rate, maxRate }) {
    // Définition d'un tableau vide dans lequel on va "push" les étoiles en fonction de la note de l'élément
    let rating = [];
    // Fabrication d'une boucle "for" de 0 à "maxRate" (La note maximale définie en prop)
    for (let i = 0; i < maxRate; i++) {
        rating.push(
            <img
                key={i}
                className="star"
                src={i < rate ? red_star : grey_star}
                alt={`${rate}/${maxRate}`}
            />
        );
    }
    return rating;
}

export default Rating;
