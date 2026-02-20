import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import signup from "../assets/backgroundImage/signup.png";
import Footer from "../components/layout/Footer";
import { useSignUp } from "@clerk/clerk-react";
import OTPInput from "react-otp-input";

import TextField from "@mui/material/TextField";

import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const navigate = useNavigate();
  const initialValue = {
    name: "",
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { signUp, isLoaded } = useSignUp();
  const [code, setCode] = useState("");
  const [verify, setVerify] = useState(false);

  const handleSignUP = async (e) => {
    e.preventDefault();
    if (!isLoaded) return;
    try {
      await signUp.create({
        emailAddress: formData.email,
        password: formData.password,
        username: formData.name,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      setVerify(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await signUp.attemptEmailAddressVerification({
        code: code,
      });
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
          <form action="" onSubmit={handleSignUP}>
            <h1 className=" text-4xl tracking-wide">Create an Account</h1>
            <p className="mt-3">Enter your Details below</p>
            <div className="mt-6 flex flex-col gap-5">
              <TextField
                name="name"
                label="Name"
                variant="standard"
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label="Email"
                variant="standard"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                name="password"
                label="Password"
                variant="standard"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {!verify ? (
              <button
                className="bg-orange text-white rounded py-3 w-full font-bold mt-6 cursor-pointer"
                type="submit"
              >
                Create Account
              </button>
            ) : (
              <div>
                <p className="mt-6">Verify Your Email Address</p>
                <OTPInput
                  value={code}
                  onChange={setCode}
                  numInputs={6}
                  renderInput={(props) => (
                    <input
                      {...props}
                      className="mt-2 border border-gray-400 py-2 rounded text-center text-xl focus:border-orange focus:border-2 outline-none"
                    />
                  )}
                  inputStyle={{ width: "40px" }}
                  renderSeparator={<span className="mx-1.5"></span>}
                />
                <button
                  onClick={handleVerify}
                  className="bg-orange text-white rounded py-3 w-full font-bold mt-6 cursor-pointer"
                >
                  Verify Email
                </button>
              </div>
            )}

            <p className="border rounded border-slate-300 py-3 w-full mt-4 flex items-center justify-center gap-3">
              <FcGoogle className="w-6 h-6" /> Sign up with Google
            </p>
            <p className="mt-6 text-center text-slate-700">
              Already have Account?
              <Link to="/login" className="ml-2 font-bold border-b">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
