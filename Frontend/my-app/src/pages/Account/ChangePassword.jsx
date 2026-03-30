import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { MdOutlineErrorOutline } from "react-icons/md";

export default function ChangePassword() {
  const { user } = useUser();

  const initialValue = {
    currentpwd: "",
    newpwd: "",
    confirmpwd: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
  });

  const onSubmit = async (data) => {
    try {
      if (data.currentpwd && data.newpwd && data.confirmpwd) {
        if (data.newpwd !== data.confirmpwd) {
          alert("Password do not match");
          return;
        }
        await user.updatePassword({
          currentPassword: data.currentpwd,
          newPassword: data.newpwd,
        });
      }
      toast.success("Profile Update Successfully ! ");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-orange font-medium text-xl ">Change Password</h1>
        <div className="mt-4 flex flex-col">
          <input
            type="text"
            name="currentpwd"
            placeholder="Current Password"
            {...register("currentpwd", {
              required: "Current Password is Required!",
            })}
            className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-1.5"
          />
          {errors.currentpwd && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <MdOutlineErrorOutline size={20} />
              {errors.currentpwd.message}
            </p>
          )}

          <input
            type="text"
            name="newpwd"
            placeholder="New Password"
            {...register("newpwd", {
              required: "New Password is Required!",
              minLength: {
                value: 6,
                message: "Minimum 6 Characters Required !",
              },
            })}
            className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-4"
          />
          {errors.newpwd && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <MdOutlineErrorOutline size={20} />
              {errors.newpwd.message}
            </p>
          )}

          <input
            type="text"
            name="confirmpwd"
            placeholder="Confirm New Password"
            {...register("confirmpwd", {
              required: "Confirm Password is Required!",
              validate: (value, formValues) =>
                value === formValues.newpwd || "Password do not match",
            })}
            className="bg-[#F5F5F5] rounded px-4 py-2.5 outline-orange mt-4"
          />
          {errors.confirmpwd && (
            <p className="text-red-500 text-sm flex items-center gap-1">
              <MdOutlineErrorOutline size={20} />
              {errors.confirmpwd.message}
            </p>
          )}
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
              Change Password
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
