import React from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import { useUser } from "@clerk/clerk-react";

export default function Account() {
  const { user } = useUser();
  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-45">
        <div className="flex justify-between">
          <Breadcrumbs />
          <p>
            Welcome{" "}
            <span className="text-orange font-bold">{user.username}</span>
          </p>
        </div>
        <div className="mt-15">
          werwet
        </div>
      </div>
    </>
  );
}
