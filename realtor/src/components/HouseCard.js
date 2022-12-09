function HouseCard({ house, onDeleteHouse, onUpdateHouse}) {
  const { id, name, value, location, description, img_url } = house;

  function handleDeleteClick() {
    fetch(`/properties/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteHouse(id);
      }
    });
    window.location.reload(true);
  }

  function handleDeleteClick() {
    fetch(`/properties/${id}`, {
      method: "UPDATE",
    }).then((r) => {
      if (r.ok) {
        onDeleteHouse(id);
      }
    });
    window.location.reload(true);
  }
  return (
    <li className="card">
      <img src={img_url} alt={name} />
      <h4>{name}</h4>
      <p>Price: {value}</p>
      <p>Description: {description}</p>
      <p>Location: {location}</p>

      <button onClick={handleDeleteClick}>Delete</button>
      <br></br>
      <button onClick={handleDeleteClick}>Update</button>
    </li>
  );
}


export default HouseCard;