import React, { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { user } = useUser();
  const navigate = useNavigate();

  const initialValue = {
    firstname: user?.firstName || "",
    lastname: user?.lastName || "",
    email: user?.primaryEmailAddress?.emailAddress,
    address: user?.unsafeMetadata?.address || "",
    city: user?.unsafeMetadata?.city || "",
    phoneNumber: user?.unsafeMetadata?.phoneNumber || "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
  });

  useEffect(() => {
    if (user) {
      reset({
        firstname: user?.firstName || "",
        lastname: user?.lastName || "",
        email: user?.primaryEmailAddress?.emailAddress,
        address: user?.unsafeMetadata?.address || "",
        city: user?.unsafeMetadata?.city || "",
        phoneNumber: user?.unsafeMetadata?.phoneNumber || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    try {
      await user.update({
        firstName: data.firstname,
        lastName: data.lastname,
        unsafeMetadata: {
          address: data.address,
          city: data.city,
          phoneNumber: data.phoneNumber,
        },
      });
      toast.success("Profile Update Successfully ! ");
    } catch (error) {
      console.log(error);
      if (
        error?.errors?.[0]?.code === "requires_recent_login" ||
        error?.errors?.[0]?.message?.includes("verification")
      ) {
        toast.error("Please login again to continue.");
        navigate("/login");
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-orange font-medium text-xl ">
          Edit Your Profile
        </h1>
        <div className="grid grid-cols-2 gap-x-14 gap-y-6 mt-4">
          <div className="flex flex-col">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name="username"
              {...register("firstname", {
                required: "First Name is Required!",
              })}
              placeholder="Enter First Name"
              className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
            />
            {errors.firstname && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <MdOutlineErrorOutline size={20} />
                {errors.firstname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              {...register("lastname", { required: "Last Name is Required!" })}
              className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <MdOutlineErrorOutline size={20} />
                {errors.lastname.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              {...register("email", {
                required: "Email is Required!",
              })}
              disabled
              className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
            />
            {errors.email && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <MdOutlineErrorOutline size={20} />
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter Address"
              {...register("address", {
                required: "Address is Required!",
              })}
              className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
            />
            {errors.address && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <MdOutlineErrorOutline size={20} />
                {errors.address.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              placeholder="Enter City"
              {...register("city", {
                required: "city is Required!",
              })}
              className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
            />
            {errors.city && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <MdOutlineErrorOutline size={20} />
                {errors.city.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              {...register("phoneNumber", {
                required: "Phone Number is Required!",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter valid 10 digit phone number !",
                },
              })}
              className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm flex items-center gap-1">
                <MdOutlineErrorOutline size={20} />
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-6">
          <button
            onClick={() => reset()}
            className="rounded cursor-pointer py-3 px-10 bg-orange/12"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-orange text-white rounded cursor-pointer py-3 px-10"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
