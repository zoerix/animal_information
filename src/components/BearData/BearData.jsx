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

    const formatLocations = (locations) => {
        return locations.join(", ");
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
                                    <li className=" animalCharName">{animal.taxonomy.scientific_name}</li>
                                    <li className=" animalCharLocation">{formatLocations(animal.locations)} </li>
                                    <li className=" animalCharColor">{
                                        animal.characteristics.color} </li>
                                    <li className=" animalCharDiet">{animal.characteristics.diet} </li>
                                    <li className=" animalCharPrey">{animal.characteristics.prey} </li>
                                    {/* <li className=" animalCharTemp">{animal.characteristics.temperament} </li> */}
                                    <li className=" animalCharDesc">{animal.characteristics.slogan} </li>
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