import Navbar from "../components/layout/Navbar";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/layout/Footer";

import { FaCheckCircle } from "react-icons/fa";
import { Empty } from "antd";

export default function OrderCompleted() {
  const location = useLocation();
  const orderData = location.state?.order;

  const formatDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <div className="max-w-390 mx-auto px-10 mt-45">
        {!orderData || !orderData.orderItems?.length ? (
          <div className="text-center">
            <Empty
              className="flex flex-col items-center"
              description=""
              image="https://res.cloudinary.com/dxj264ncs/image/upload/v1774330566/no-orders-yet-illustration-svg-download-png-13391227_qerque.webp"
              imageStyle={{
                height: "160px",
              }}
            />
            <h1 className="font-medium text-gray-400">No Order Found!</h1>
            <p className="mb-10 mt-3 text-sm text-gray-400">
              You haven’t placed any order yet. Please shop now to place your
              order.
            </p>
            <Link
              to="/shop"
              className="text-white py-4 px-12 rounded bg-orange"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-8 shadow-lg inset-shadow-sm rounded-xl p-10">
            <div className="space-y-6">
              <FaCheckCircle size={55} className="text-green-500" />
              <h1 className="text-3xl font-bold">
                Thank You For Your Purchase!
              </h1>
              <p className="text-sm">
                Your order will be processed within 24 hours during working
                days. we will notify you by email once your order has been
                shipped.
              </p>
              <div className="space-y-3">
                <h1 className="font-medium text-xl">Billing Address</h1>
                <p>
                  <span className="font-medium mr-3">Name :</span>
                  {orderData?.username}
                </p>
                <p>
                  <span className="font-medium mr-2">Address : </span>
                  <span>
                    {orderData?.apartment} {orderData?.companyName},{" "}
                    {orderData?.streetAddress}, {orderData?.city}
                  </span>
                </p>
                <p>
                  <span className="font-medium mr-3">Phone : </span>
                  {orderData?.phoneNumber}
                </p>
                <p>
                  <span className="font-medium mr-3">Email : </span>
                  {orderData?.email}
                </p>
              </div>
              <div className="flex items-end gap-8 mt-8">
                <Link
                  to="/home"
                  className="bg-orange text-white rounded py-4 px-12"
                >
                  Go to Home
                </Link>
                <div className="order"></div>
              </div>
            </div>

            <div className="bg-[#f7f7f7] rounded-lg py-8 px-12 space-y-6">
              <h1 className="text-2xl font-medium">Order Summary</h1>
              <hr className="text-gray-300" />
              <div className="flex justify-between text-gray-500 text-sm">
                <div>
                  <p>Date</p>
                  <p className="text-black font-medium">{formatDate}</p>
                </div>
                <div>
                  <p>Payment Method</p>
                  <p className="text-black font-medium">
                    {orderData?.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : "Bank"}
                  </p>
                </div>
                <div>
                  <p>Shipping</p>
                  <p className="text-black font-medium">Free</p>
                </div>
              </div>
              <hr className="text-gray-300" />

              <div className="space-y-5 overflow-auto no-scrollbar h-40">
                {orderData?.orderItems?.map(
                  ({
                    product_id,
                    name,
                    price,
                    image,
                    quantity,
                    productSize,
                  }) => (
                    <div
                      className="flex items-start justify-between gap-4"
                      key={product_id}
                    >
                      <img
                        src={image[0]?.url}
                        alt={name}
                        className="w-19 h-17  border border-gray-400 rounded p-1.5"
                      />
                      <div className="text-[12px] grow text-gray-500">
                        <p className="text-black font-medium text-sm">{name}</p>
                        <p>Size : {productSize}</p>
                        <p>Qty : {quantity}</p>
                      </div>
                      <p>${price.toFixed(2)}</p>
                    </div>
                  ),
                )}
              </div>
              <hr className="text-gray-300" />
              <div className="flex justify-between font-medium text-lg">
                <p>Total Price :</p>
                <p>${orderData?.totalPrice?.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
