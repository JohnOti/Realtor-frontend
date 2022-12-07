import React from "react";

import Property from "./Property";

function HouseContainer({ houses, onDeleteHouse }) {
     
    const houseCards = (
      houses && houses.map((house) => (
            <Property house={house}
                key={house.id}
                onDeleteHouse={onDeleteHouse}
            
            />
        ))
    );
    
    return <div id="house-collection">{houseCards}</div>;
}

export default HouseContainer;