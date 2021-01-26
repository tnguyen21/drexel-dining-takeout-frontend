import React, { useState } from "react";
import firebase from "../Firestore/Firestore";

export default function Service() {
  // Very bare bones of what the service page should look like
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <div className="container-md mx-auto h-screen">
        <h1 className="my-4 text-center text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
          Service
        </h1>
      </div>
    </div>
  );
}
