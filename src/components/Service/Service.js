import React, from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "../Firestore/Firestore";

export default function Service() {
  const db = firebase.firestore();
  const [orders] = useCollectionData(db.collection("Orders"));

  async function setStatusToOne(order) {
    console.log(order);
    const res = await db
      .collection("Orders")
      .doc(order.student_name)
      .set({ ...order, status: 1 }, { merge: true });
    if (res) {
      console.log("Order set to one!")
    }
  }

  console.log(orders);

  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <div className="container-md mx-auto h-screen">
        <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Service
        </h1>
        {orders == undefined ? (
          ""
        ) : (
          <div className="grid grid-cols-2">
            {orders
              .filter((order) => order.status === 0)
              .map((order) => (
                <div className="max-w-2xl mt-1 sm:px-6 lg:px-8">
                  <div className="overflow-hidden shadow-md">
                    <div className="px-6 py-4 bg-white border-b border-gray-200 font-bold uppercase">
                      {order.student_name}
                    </div>

                    <ol className="p-6 list-decimal bg-white border-b border-gray-200">
                      {order.order_items.map((item) => (
                        <li>{item.itemName}</li>
                      ))}
                    </ol>

                    <div className="p-6 bg-white border-gray-200 text-right">
                      <button
                        className="bg-blue-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-blue-400 rounded uppercase"
                        onClick={() => setStatusToOne(order)}
                      >
                        Order Picked Up
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
