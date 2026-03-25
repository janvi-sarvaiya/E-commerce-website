import React, { useMemo } from "react";
import Breadcrumbs from "../components/common/Breadcrumbs";
import TotalPriceTable from "../components/common/TotalPriceTable";
import ShowCartProduct from "../components/product/ShowCartProduct";
import { useDispatch, useSelector } from "react-redux";
import { useUser } from "@clerk/clerk-react";
import { useCheckoutOrder } from "../api/HTTP_API";
import { clearCart } from "../features/cartSlice";
import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Empty } from "antd";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useUser();
  const { mutate, isPending } = useCheckoutOrder();
  const cartItem = useSelector((state) => state.cart.cartItem);

  const totalPrice = useMemo(() => {
    return cartItem?.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
  }, [cartItem]);

  const initialValue = {
    username: user?.username || "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: user?.primaryEmailAddress?.emailAddress || "",
    paymentMethod: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
  });

  const onSubmit = (data) => {
    try {
      const placeOrderData = {
        ...data,
        totalPrice,
        clerkUserId: user?.id,
        orderItems: cartItem,
      };
      mutate(placeOrderData);
      toast.success("Place Order Successfully !");
      reset();
      navigate("/ordercompleted", { state: { order: placeOrderData } });
      dispatch(clearCart());
    } catch (error) {
      console.log(error);
      toast.error("Could not place order. Try again!");
    }
  };
  return (
    <>
      <div className="max-w-390 mx-auto px-10 mt-45">
        {cartItem.length === 0 ? (
          <div className="text-center">
            <Empty
              className="flex flex-col items-center"
              description=""
              image="https://res.cloudinary.com/dxj264ncs/image/upload/v1772445350/emptycart_zb42tu.png"
              imageStyle={{
                height: "160px",
              }}
            />
            <h1 className="font-medium text-gray-400">Your Cart is Empty!</h1>
            <p className="mb-10 mt-3 text-sm text-gray-400">
              Looks like you haven’t added anything to your cart yet. Start
              shopping to fill it up.
            </p>
            <Link
              to="/shop"
              className="text-white py-4 px-12 rounded bg-orange"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <>
            <Breadcrumbs />
            <h1 className="text-4xl font-medium mt-12">Billing Details</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-10 grid grid-cols-2 gap-42">
                <div>
                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">First Name*</label>
                    <input
                      type="text"
                      name="username"
                      {...register("username", {
                        required: "First Name is Required!",
                      })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange"
                    />
                    {errors.username && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <MdOutlineErrorOutline size={20} />
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      {...register("companyName", { required: false })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange"
                    />
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">Street Address*</label>
                    <input
                      type="text"
                      name="streetAddress"
                      {...register("streetAddress", {
                        required: "Street Address is Required!",
                      })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange"
                    />
                    {errors.streetAddress && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <MdOutlineErrorOutline size={20} />
                        {errors.streetAddress.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">
                      Apartment, floor, etc. (optional)
                    </label>
                    <input
                      type="text"
                      name="apartment"
                      {...register("apartment", { required: false })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange"
                    />
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">Town/City*</label>
                    <input
                      type="text"
                      name="city"
                      {...register("city", {
                        required: "City Address is Required!",
                      })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange"
                    />
                    {errors.city && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <MdOutlineErrorOutline size={20} />
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">Phone Number*</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      {...register("phoneNumber", {
                        required: "Phone Number is Required!",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter valid 10 digit phone number",
                        },
                      })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange "
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <MdOutlineErrorOutline size={20} />
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="text-gray-500">Email Address*</label>
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: "Email is Required!",
                      })}
                      className="bg-[#F5F5F5] py-2.5 px-4 rounded mt-1.5 outline-orange"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <MdOutlineErrorOutline size={20} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="flex gap-3 mt-2">
                    <input type="checkbox" className="accent-orange h-5 w-5" />
                    <p>Save this information for faster check-out next time</p>
                  </div>
                </div>

                <div className="space-y-8 max-w-lg">
                  <ShowCartProduct cartItem={cartItem} />
                  <TotalPriceTable totalPrice={totalPrice} />

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <p className="flex gap-3">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bank"
                          {...register("paymentMethod", {
                            required: "Please Select payment method!",
                          })}
                          className="accent-black h-5 w-5"
                        />
                        Bank
                      </p>
                      <div className="flex gap-2">
                        <img src="https://res.cloudinary.com/dxj264ncs/image/upload/v1773306308/Bkash_bvmbys.png" />
                        <img src="https://res.cloudinary.com/dxj264ncs/image/upload/v1773306308/Visa_fltfto.png" />
                        <img src="https://res.cloudinary.com/dxj264ncs/image/upload/v1773306309/Mastercard_ll43ti.png" />
                        <img src="https://res.cloudinary.com/dxj264ncs/image/upload/v1773306308/Nagad_yocy62.png" />
                      </div>
                    </div>

                    <p className="flex gap-3">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        {...register("paymentMethod")}
                        className="accent-black h-5 w-5"
                      />
                      Cash on delivery
                    </p>
                    {errors.paymentMethod && (
                      <p className="text-red-500 text-sm flex items-center gap-1">
                        <MdOutlineErrorOutline size={20} />
                        {errors.paymentMethod.message}
                      </p>
                    )}

                    <div className="space-x-3">
                      <input
                        type="text"
                        placeholder="Coupon Code"
                        className="border rounded py-2.5 px-6"
                      />
                      <button
                        className={`bg-orange text-white py-2.5 px-10 rounded ${cartItem.length == 0 ? "cursor-not-allowed" : "cursor-pointer"}`}
                      >
                        Apply Coupon
                      </button>
                    </div>
                    <button
                      type="submit"
                      disabled={isPending}
                      className="bg-orange text-white rounded cursor-pointer py-3 px-12 mt-2"
                    >
                      {isPending ? "Placing Order..." : "Place Order"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
}
