import React from "react";
import { FiSettings } from "react-icons/fi";

function CitySelector({ city, handleClick }) {
  return (
    <div>
      <p>
        {city} <FiSettings onClick={handleClick} />
      </p>
    </div>
  );
}

export default CitySelector;
