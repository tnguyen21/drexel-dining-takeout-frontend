import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="text-center mt-5">
      <Link to="/" className="mx-2 font-semibold">
        Home
      </Link>
      <Link to="/order" className="mx-2 font-semibold">
        Order
      </Link>
      <Link to="/service" className="mx-2 font-semibold">
        Serve
      </Link>
    </nav>
  );
}
