import React from "react";
import Navbar from "../components/layout/Navbar";
import Breadcrumbs from "../components/common/Breadcrumbs";
import Footer from "../components/layout/Footer";
// import { useForm } from "react-hook-form";

import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
  // const initialValue = {
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   message: "",
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: initialValue,
  // });

  // const onSubmit = (data) => {
    
  // };

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-45">
        <Breadcrumbs />

        <div className="grid grid-cols-3 gap-8 mt-15">
          <div className="space-y-4 shadow-lg inset-shadow-sm p-10 rounded">
            <div className="flex items-center gap-3">
              <FiPhone
                className="bg-orange p-2 text-white rounded-full"
                size={40}
              />
              <p className="font-medium">Call To Us</p>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
            <hr className="text-gray-300 my-8" />

            <div className="flex items-center gap-3">
              <MdOutlineEmail
                className="bg-orange p-2 text-white rounded-full"
                size={40}
              />
              <p className="font-medium">Write To US</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>

          <div className="col-span-2 shadow-lg inset-shadow-sm p-10 rounded place-items-end">
            <div className="grid grid-cols-3 gap-4 w-full">
              <input
                type="text"
                placeholder="Your Name*"
                name="name"
                className="bg-[#F5F5F5] py-2.5 px-4 rounded  outline-orange"
              />
              <input
                type="email"
                placeholder="Your Email*"
                name="email"
                className="bg-[#F5F5F5] py-2.5 px-4 rounded  outline-orange"
              />
              <input
                type="text"
                placeholder="Your Phone*"
                name="phoneNumber"
                className="bg-[#F5F5F5] py-2.5 px-4 rounded  outline-orange"
              />
            </div>
            <textarea
              name="message"
              rows={8}
              placeholder="Your Message"
              className="bg-[#F5F5F5] py-2.5 px-4 rounded outline-orange w-full mt-8"
            ></textarea>
            <button
              type="submit"
              className="flex bg-orange text-white rounded cursor-pointer py-3.5 px-12 mt-5"
            >
              Send Massage
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
