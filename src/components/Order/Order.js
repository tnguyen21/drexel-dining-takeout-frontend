import React, { useState } from "react";
import firebase from "../Firestore/Firestore";
import Menu from "../Menu/Menu";

export default function Order() {
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

  let [order, changeOrder] = useState([]);

  function writerOrder() {
    let order = db.collection("Orders").add({
      status: 0,
      student_name: "John Doe",
      order_items: ["some", "item", "names"],
      order_time: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("order sent!");
  }

  return (
    <>
      <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
        Order
      </h1>
      <Menu />
      <button
        onClick={() => writerOrder()}
        className="rounded shadow-lg font-semibold py-2 lg:py-4 px-8"
      >
        Send Order!
      </button>
    </>
  );
}
