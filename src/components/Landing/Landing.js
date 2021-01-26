import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="gradient leading-relaxed tracking-wide flex flex-col">
      <div className="container mx-auto pb-5">
        <div className="text-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            🐉 Grab and Go
          </h1>
          <p className="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
            Skip the wait lines at Urban!
          </p>

          <Link
            to="/order"
            className="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
          >
            Submit an Order
          </Link>
          <Link
            to="/service"
            className="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >
            View Submitted Orders
          </Link>
        </div>
      </div>

      <section className="bg-gray-100 border-b py-8">
        <div className="container mx-auto m-8">
          <h2 className="w-full my-2 text-3xl font-black leading-tight text-center text-gray-800">
            How It Works
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="max-w-sm sm:w-1/2 p-6 text-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Order on your phone
              </h3>
              <i class="fas fa-mobile-alt fa-10x"></i>
              <p className="text-gray-600 mb-8 mt-2">
                Place an order on the app based on weekly menu items at Urban.
              </p>
            </div>
            <div className="max-w-sm sm:w-1/2 p-6 text-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Swipe in at Urban
              </h3>
              <i class="fas fa-id-card fa-10x"></i>
              <p className="text-gray-600 mb-8 mt-2">
                Swipe your card when you enter Urban.
              </p>
            </div>
            <div className="max-w-sm sm:w-1/2 p-6 text-center">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Pick up your food
              </h3>
              <i class="fas fa-shopping-bag fa-10x"></i>
              <p className="text-gray-600 mb-8 mt-2">
                Go to the designated food pickup area and pickup the bag with
                all your items. It's really as easy as that!
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center mt-4">
        <small>
          Made with ❤ by{" "}
          <a
            className="text-blue-500"
            href="https://tommynguyen.dev/"
            target="_blank"
          >
            Tommy Nguyen
          </a>
          , Allen Cai, Katy Redmond, Christina Gian, & Natasha Karnoto
        </small>
      </footer>
    </div>
  );
}
