import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((x) => x);
  console.log("pathname", pathname);
  return (
    <div className="text-gray-500">
      <Link to="/home">Home</Link>
      {pathname.map((val) => {
        const route = "/" + val;
        return (
          <span key={route}>
            {"  /  "}
            <Link to={route} className="text-black">
              {val[0].toUpperCase() + val.slice(1)}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
