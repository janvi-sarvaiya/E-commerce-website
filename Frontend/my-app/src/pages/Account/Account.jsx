import React from "react";
import Navbar from "../../components/layout/Navbar";
import Breadcrumbs from "../../components/common/Breadcrumbs";
import { useUser } from "@clerk/clerk-react";
import { NavLink, Outlet } from "react-router-dom";
import Wishlist from "../Wishlist";

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
            <span className="text-orange font-bold">{user?.fullName}</span>
          </p>
        </div>
        <div className="mt-15 grid grid-cols-[250px_1fr] gap-10">
          <div className="space-y-4">
            <div>
              <h1 className="font-medium">Manage My Account</h1>
              <ul className="space-y-1 mt-2 ml-8">
                <li>
                  <NavLink
                    to="/my-account"
                    className={({ isActive }) =>
                      isActive ? "text-orange font-medium" : "text-gray-500"
                    }
                  >
                    My Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="change-password"
                    className={({ isActive }) =>
                      isActive ? "text-orange font-medium" : "text-gr ay-500"
                    }
                  >
                    Change Password
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-medium">My Orders</h1>
              <ul className="space-y-1 mt-2 ml-8">
                <li>
                  <NavLink
                    to="orders"
                    className={({ isActive }) =>
                      isActive ? "text-orange font-medium" : "text-gray-500"
                    }
                  >
                    Order History
                  </NavLink>
                </li>
              </ul>
            </div>

            <div>
              <h1 className="font-medium">My WishList</h1>
              <ul className="space-y-1 mt-2 ml-8">
                <li>
                  <NavLink
                    to="/wishlist"
                    className={({ isActive }) =>
                      isActive ? "text-orange font-medium" : "text-gray-500"
                    }
                  >
                    Saved Items
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded shadow-lg inset-shadow-sm py-10 px-20">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
