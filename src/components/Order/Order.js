import React from "react";
import firebase from "../Firestore/Firestore";

export default function Order() {
  // Very bare bones of what the order page should look like
  const db = firebase.firestore();
  db.settings({
    timestampsInSnapshots: true,
  });

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
      <button onClick={() => writerOrder()}>Send Order!</button>
    </>
  );
}
