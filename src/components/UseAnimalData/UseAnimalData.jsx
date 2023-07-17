import { useEffect, useState } from "react";

const useAnimalData = (animal) => {

    const [data, setData] = useState([]);
    const [selectedAnimal, setSelectedAnimal] = useState(null);
    const base = "https://api.api-ninjas.com/v1/animals?";

    useEffect(() => {
        const fetchAnimalData = async () => {
            const animalFact = await fetch(`${base}name=${animal}`, {
                headers: {
                    'X-Api-Key': 'o+aAhjJLfM/BDijkTnudTw==829MpyTqMitRBY16'
                }
            });
            const fetchedData = await animalFact.json();
            console.log(fetchedData)
            setData(fetchedData);
        };

        fetchAnimalData(animal);
    }, [animal, base]);

    const handleAnimalClick = (animal) => {
        setSelectedAnimal(animal);
    };

    return { data, selectedAnimal, handleAnimalClick };

};

export default useAnimalData

