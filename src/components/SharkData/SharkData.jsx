// import React, { useEffect, useState } from "react";
import useAnimalData from "../UseAnimalData/UseAnimalData";

import './SharkData.scss';


const SharkData = () => {
    const { data, selectedAnimal, handleAnimalClick } = useAnimalData("shark");

    const toggleExpansion = (animal) => {
        if (selectedAnimal === animal) {
            handleAnimalClick(null);
        } else {
            handleAnimalClick(animal);
        }
    };
    return (

        <div className="animalDataContainer">

            <div className="animalDataShark">

                <ul>
                    {data.map((animal, index) => (
                        <li className="animalCardShark" key={index}>
                            <div
                                className={`animalNameShark ${selectedAnimal === animal ? "expanded" : ""}`}
                                onClick={() => toggleExpansion(animal)}
                            >
                                {animal.name}
                            </div>

                            {selectedAnimal === animal && (
                                <ul className="animalCharactersShark">
                                    <li>Name: {animal.taxonomy.scientific_name}</li>
                                    <li>Location: {animal.locations} </li>
                                    <li>Color: {animal.characteristics.color} </li>
                                    <li>Diet: {animal.characteristics.diet} </li>
                                    <li> {animal.characteristics.prey} </li>
                                    <li> {animal.characteristics.temperament} </li>
                                    <li>Description: {animal.characteristics.slogan} </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

        </div>

    );
}


export default SharkData;