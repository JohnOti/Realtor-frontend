import React from "react";

import Property from "./Property";

function HouseContainer({ houses, onDeleteHouse }) {
  return (
    <ul className="cards">
      {houses.map((house) => {
        return (
          <Property
            house={house}
            key={house.id}
            onDeleteHouse={onDeleteHouse}
          />
        );
      })}
    </ul>
  );
}

export default HouseContainer;
