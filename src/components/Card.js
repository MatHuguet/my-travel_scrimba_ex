/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../styles/cards.css"
import LocationLogo from "../img/icons8-position-48.png"


export default function Card(props) {

    return (
        <section className="card-container">
            <div className="card-pic">
            <img 
                src={require(`../img/${props.imgName}`)} 
                className="card-img" 
            />
            </div>
            <div className="card-description">
                <div className="location-container">
                    <img src={LocationLogo} width="7px" alt="location"/>
                    <h2 className="country">{props.country}</h2>
                    
                    <a className="google-link" href={props.linkGooglemap}>View on Google Maps</a>
                </div>
                <div className="travel-dates">
                    <p>{props.travelDate}</p>
                    <p>{props.backDate}</p>
                </div>
                <div className="card-text">
                    <h3 className="title">{props.title}</h3>
                    <p className="card-impression">{props.impressionText}</p>
                </div>


            </div>
            
        </section>
    )
}