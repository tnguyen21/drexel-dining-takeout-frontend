import React, { useState } from "react";
import { menuItems } from "../../helpers/mock-menu";
import firebase from "../Firestore/Firestore";
import MenuItem from "../MenuItem/MenuItem";

export default function Order() {
  const db = firebase.firestore();

  let [order, changeOrder] = useState([]);
  let [customerName, setCustomerName] = useState("");

  function handleChange(e) {
    setCustomerName(e.target.value);
  }

  function writerOrder() {
    db.collection("Orders").add({
      status: 0,
      student_name: customerName,
      order_items: order,
      order_time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    changeOrder([]); // reset state after user submits order
    setCustomerName("");
  }

  function addToOrder(item) {
    console.log(order);
    return () => changeOrder([...order, item]);
  }

  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <div className="container-md mx-auto h-screen">
        <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Order
        </h1>
        <div className="grid grid-cols-2">
          {menuItems.map((item) => {
            return (
              <div className="col-span-2 md:col-span-1 m-4 min-w-max">
                <button
                  className="hover:shadow-lg min-w-max"
                  onClick={addToOrder(item)}
                >
                  <MenuItem
                    itemName={item.itemName}
                    station={item.station}
                    mealTime={item.mealtime}
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-2">
          Name:
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            type="text"
            value={customerName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="text-center">
          <button
            onClick={() => writerOrder()}
            className="rounded shadow-lg font-semibold py-2 lg:py-4 px-8 mt-3"
          >
            Send Order!
          </button>
        </div>
      </div>
    </div>
  );
}
