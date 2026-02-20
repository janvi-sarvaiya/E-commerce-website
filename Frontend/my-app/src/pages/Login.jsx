import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import signup from "../assets/backgroundImage/signup.png";
import { useSignIn } from "@clerk/clerk-react";

import TextField from "@mui/material/TextField";

export default function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { signIn, isLoaded, setActive } = useSignIn();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      const result = await signIn.create({
        identifier: loginData.email,
        password: loginData.password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex mt-14 gap-40">
        <div>
          <img src={signup} alt="signup" className="w-220 h-160" />
        </div>
        <div className="w-92 my-auto">
          <form action="" onSubmit={handleLogin}>
            <h1 className=" text-4xl tracking-wide">Log in to Exclusive</h1>
            <p className="mt-3">Enter your Details below</p>
            <div className="mt-6 flex flex-col gap-5">
              <TextField
                label="Email"
                variant="standard"
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                variant="standard"
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
            <div className="mt-8 flex items-center justify-between">
              <button
                type="submit"
                className="bg-orange text-white rounded py-3 px-12 font-bold  cursor-pointer"
              >
                Log in
              </button>

              <Link to="/account" className="text-orange">
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
