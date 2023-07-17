import useAnimalData from "../UseAnimalData/UseAnimalData";
import './BearData.scss';

const BearData = () => {
    const { data, selectedAnimal, handleAnimalClick } = useAnimalData("bear");

    const toggleExpansion = (animal) => {
        if (selectedAnimal === animal) {
            handleAnimalClick(null);
        } else {
            handleAnimalClick(animal);
        }
    };
    return (

        <div className="animalDataContainer">
            <div className="animalDataBear">

                <ul>
                    {data.map((animal, index) => (
                        <li className="animalCardBear" key={index}>
                            <div
                                className={`animalNameBear ${selectedAnimal === animal ? "expanded" : ""}`}
                                onClick={() => toggleExpansion(animal)}
                            >
                                {animal.name}
                            </div>

                            {selectedAnimal === animal && (
                                <ul className="animalCharactersBear">
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
};

export default BearData