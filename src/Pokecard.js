import React from "react";
import "./Pokecard.css";

// Shows a single Pokemon

const Pokecard = (props) => {
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
    return (
        <div className="Pokecard">
            <div className="Pokecard-name">{props.name}</div>
            <img className="Pokecard-img" src={imgSrc} />
            <div className="Pokecard-type">Type: {props.type}</div>
            <div className="Pokecard-exp">EXP: {props.exp}</div>
        </div>
    )
};

export default Pokecard;