import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="text-center mt-5">
      <Link to="/" className="mx-2 font-semibold hover:underline">
        Home
      </Link>
      <Link to="/order" className="mx-2 font-semibold hover:underline">
        Order
      </Link>
      <Link to="/service" className="mx-2 font-semibold hover:underline">
        Serve
      </Link>
    </nav>
  );
}
