import "./Appart_info.scss";
import data from "../../data/apartments.json";
import Collapse from "../Collapse/Collapse";
import Rating from "../Rating/Rating";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

function Appart_info() {
    const params = useParams();
    const id = params.id;
    const matchingAppart = data.find((appart) => appart.id === id);

    // Condition pour gérer le cas ou l'id est incorrect afin de renvoyer vers la page d'erreur avec l'API "Navigate" de React Router
    if (matchingAppart === undefined) {
        return <Navigate to="/404" />;
    }

    // Récupération des notes des appartements
    const matchingAppartRating = matchingAppart.rating;

    return (
        <div>
            <div className="owner_and_info_wrapper">
                <div className="appart_info_wrapper">
                    <h1 className="appart_info_title">
                        {matchingAppart.title}
                    </h1>
                    <h2 className="appart_info_location">
                        {matchingAppart.location}
                    </h2>
                    <div className="appart_info_tags_wrapper">
                        {matchingAppart.tags.map((tag, index) => {
                            return (
                                <div key={tag + index + id}>
                                    <p className="appart_info_tags">{tag}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="host_wrapper">
                    <div className="host_name_picture">
                        <p className="host_name">{matchingAppart.host.name}</p>
                        <img
                            className="host_picture"
                            src={matchingAppart.host.picture}
                            alt={matchingAppart.host.name}
                        ></img>
                    </div>
                    <div className="host_stars">
                        <Rating
                            arrayToRate={matchingAppartRating}
                            maxRate={"5"}
                        />
                    </div>
                </div>
            </div>
            <div className="collapses_wrapper">
                <div className="collapse">
                    <Collapse
                        title={"Description"}
                        id={matchingAppart.id}
                        content={matchingAppart.description}
                    />
                </div>
                <div className="collapse">
                    <Collapse
                        title={"Équipements"}
                        id={matchingAppart.id}
                        content={matchingAppart?.equipments.map(
                            (equipment, index) => {
                                return (
                                    <li key={equipment + index + id}>
                                        {equipment}
                                    </li>
                                );
                            }
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default Appart_info;
