import useAnimalData from "../UseAnimalData/UseAnimalData";
import './MonkeyData.scss';


const MonkeyData = () => {
    const { data, selectedAnimal, handleAnimalClick } = useAnimalData("monkey");

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

    // const formatColor = (color) => {
    //     return color.join(",");
    // };



    return (

        <div className="animalDataContainer">
            <div className="animalDataMonkey">

                <ul>
                    {data.map((animal, index) => (
                        <li className="animalCardMonkey" key={index}>
                            <div
                                className={`animalNameMonkey ${selectedAnimal === animal ? "expanded" : ""}`}
                                onClick={() => toggleExpansion(animal)}
                            >
                                {animal.name}
                            </div>

                            {selectedAnimal === animal && (
                                <ul className="animalCharactersMonkey">
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
}


export { MonkeyData };