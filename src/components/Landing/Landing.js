import React from "react";

export default function Landing() {
  return (
    <div class="gradient leading-relaxed tracking-wide flex flex-col">
      <div class="container mx-auto h-screen">
        <div class="text-center px-3 lg:px-0">
          <h1 class="my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight">
            🐉 Dine and Dash
          </h1>
          <p class="leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mb-8">
            Skip the wait lines at Urban!
          </p>

          <a
            href="/order"
            class="mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48"
          >
            Submit an Order
          </a>
          <a
            href="/service"
            class="inline-block mx-auto lg:mx-0 hover:underline bg-transparent text-gray-600 font-extrabold my-2 md:my-6 py-2 lg:py-4 px-8"
          >
            View Submitted Orders
          </a>
        </div>
      </div>

      <section class="bg-gray-100 border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-gray-800">
            Title
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3>
              <p class="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:
                <a class="text-orange-500 underline" href="https://undraw.co/">
                  undraw.co
                </a>
              </p>
            </div>
          </div>

          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Lorem ipsum dolor sit amet
                </h3>
                <p class="text-gray-600 mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  <br />
                  <br />
                  Images from:
                  <a
                    class="text-orange-500 underline"
                    href="https://undraw.co/"
                  >
                    undraw.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
