import React from "react";
import "./Appart_info.scss";
import Collapse from "../Collapse/Collapse";
import Rating from "../Rating/Rating";

function AppartInfo({ data, id }) {
    // Récupération des notes des appartements
    // const matchingAppartRating = matchingAppart.rating;

    return (
        <div>
            <div className="owner_and_info_wrapper">
                <div className="appart_info_wrapper">
                    <h1 className="appart_info_title">{data.title}</h1>
                    <h2 className="appart_info_location">{data.location}</h2>
                    <div className="appart_info_tags_wrapper">
                        {data.tags.map((tag, index) => {
                            return (
                                <div
                                    className="appart_info_tags"
                                    key={tag + index + id}
                                >
                                    <p>{tag}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="host_wrapper">
                    <div className="host_name_picture">
                        <p className="host_name">{data.host.name}</p>
                        <img
                            className="host_picture"
                            src={data.host.picture}
                            alt={data.host.name}
                        ></img>
                    </div>
                    <div className="host_stars">
                        <Rating arrayToRate={data.rating} maxRate={"5"} />
                    </div>
                </div>
            </div>
            <div className="collapses_wrapper">
                <div className="collapse">
                    <Collapse
                        title={"Description"}
                        id={data.id}
                        content={data.description}
                    />
                </div>
                <div className="collapse">
                    <Collapse
                        title={"Équipements"}
                        id={data.id}
                        content={data?.equipments.map((equipment, index) => {
                            return (
                                <li key={equipment + index + id}>
                                    {equipment}
                                </li>
                            );
                        })}
                    />
                </div>
            </div>
        </div>
    );
}

export default AppartInfo;
