import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="card_wrapper">
            <div className="card">
                <div className="card_gradient">
                    <img src={cover} alt={title}></img>
                </div>
                <h2 className="card_title">{title}</h2>
            </div>
        </Link>
    );
}

export default Card;
