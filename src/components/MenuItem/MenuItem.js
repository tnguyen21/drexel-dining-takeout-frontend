import React from "react";
import menuItems from "../../helpers/mock-menu";

export default function MenuItem({ itemName, station, mealTime }) {
  return (
    <div className="border-2 rounded py-2 px-5">
      <h3 className="font-semibold">{itemName}</h3>
      <small className="text-blue-500 font-medium">{station}</small>
      <small className="mx-2 text-green-500 font-medium">{mealTime}</small>
    </div>
  );
}
