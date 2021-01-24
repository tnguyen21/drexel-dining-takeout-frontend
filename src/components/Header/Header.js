import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="text-center mt-5">
      <Link to="/" className="mx-2">
        Home
      </Link>
      <Link to="/order" className="mx-2">
        Order
      </Link>
      <Link to="/service" className="mx-2">
        Serve
      </Link>
    </nav>
  );
}
