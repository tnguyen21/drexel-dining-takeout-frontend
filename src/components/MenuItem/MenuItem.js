import React from "react";
import menuItems from "../../helpers/mock-menu";

export default function MenuItem({ itemName, station, mealTime }) {
  return (
    <div>
      <div>
        <h3>{itemName}</h3>
        <small>{station}</small>
        <small className="mx-2">{mealTime}</small>
      </div>
    </div>
  );
}
