import React from "react";
import { menuItems } from "../../helpers/mock-menu";
import MenuItem from "../MenuItem/MenuItem";

export default function Menu({ addToOrder }) {
  return menuItems.map((item) => (
    <div className="col-span-2 md:col-span-1 m-4">
      <button onClick={() => addToOrder}>
        <MenuItem
          itemName={item.itemName}
          station={item.station}
          mealTime={item.mealtime}
        />
      </button>
    </div>
  ));
}
