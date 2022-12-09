import { useState, useEffect } from "react";
import HouseList from "./HouseList";
import Search from "./Search";
import NewHouseForm from "./NewHouseForm";

function Home() {
  const [houses, setHouses] = useState([]);
  const [serchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/properties")
      .then((r) => r.json())
      .then(setHouses);
  }, []);

  

    
    
    function addHouse(newHouse) {
        const updatedHousesArray = [...houses, newHouse];
        setHouses(updatedHousesArray);
    }

    function handleUpdateHouse(updatedHouse) {
        const updatedHousesArray = houses.map((house) => {
            return house.id === updatedHouse.id ? updatedHouse : house;
        });
        setHouses(updatedHousesArray);
    }
    
    
    function handleDeleteHouse(id) {
        const HousesArray = houses.filter((house) => house.id !== id);
        setHouses(HousesArray);
    }

  const displayHouses = houses.filter((house) => {
    return house.location.toLowerCase().includes(serchTerm.toLowerCase());
  });

  return (
      <main>
            <NewHouseForm onAddHouse={addHouse} />
      <Search searchTerm={serchTerm} onSearchChange={setSearchTerm} />
          <HouseList
              houses={displayHouses}
              onDeletedHouse={handleDeleteHouse}
                onUpdatedHouse={handleUpdateHouse}
          />
    </main>
  );
}

export default Home;
