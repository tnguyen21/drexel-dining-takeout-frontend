import React, { useState } from "react";
import firebase from "../Firestore/Firestore";
import Menu from "../Menu/Menu";

export default function Order() {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  let [order, changeOrder] = useState([]);
  let [customerName, setCustomerName] = useState("");

  function handleChange(e) {
    setCustomerName(e.target.value);
    console.log(customerName);
  }

  function writerOrder() {
    db.collection("Orders").add({
      status: 0,
      student_name: customerName,
      order_items: order,
      order_time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("order sent!");
  }

  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <div className="container-md mx-auto h-screen">
        <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Order
        </h1>
        <div className="grid grid-cols-2">
          <Menu />
        </div>
        <div className="text-center">
          <button
            onClick={() => writerOrder()}
            className="rounded shadow-lg font-semibold py-2 lg:py-4 px-8 mt-3"
          >
            Send Order!
          </button>
        </div>
        <div className="text-center mt-2">
          Name:{" "}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            type="text"
            value={customerName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
      </div>
    </div>
  );
}
