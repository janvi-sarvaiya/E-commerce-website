import React from "react";

export default function TotalPriceTable({ totalPrice }) {
  return (
    <div className="space-y-4">
      <p className="flex justify-between border-b border-b-gray-400 pb-3">
        Subtotal : <span>${totalPrice}</span>
      </p>
      <p className="flex justify-between border-b border-b-gray-400 pb-3">
        Shipping: <span>Free</span>
      </p>
      <p className="flex justify-between">
        Total : <span>${totalPrice}</span>
      </p>
    </div>
  );
}
