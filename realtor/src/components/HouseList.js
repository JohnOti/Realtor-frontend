import HouseCard from "./HouseCard";

function HouseList({ houses, onDeletedHouse, onUpdatedHouse }) {
    return (
        <ul className="cards">
            {houses.map((house) => {
                return (
                    <HouseCard
                        key={house.id}
                        house={house}
                        onDeletedHouse={onDeletedHouse}
                        onUpdatedHouse={onUpdatedHouse}
                    />
                );
            })}
        </ul>
    );
}

export default HouseList;