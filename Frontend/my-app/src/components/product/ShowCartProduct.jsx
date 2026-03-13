import React from "react";

export default function ShowCartProduct({ cartItem }) {
  return (
    <div className="space-y-4">
      {cartItem?.map(
        ({ product_id, name, price, quantity, image, productSize }) => (
          <div
            key={`${product_id}-${productSize}`}
            className="flex items-center justify-between hover:bg-[#F5F5F5] p-1 rounded"
          >
            <p className="flex items-center gap-4">
              <img src={image[0]?.url} alt={name} className="w-12 h-10" />
              {name}
            </p>
            <p>${price * quantity}</p>
          </div>
        ),
      )}
    </div>
  );
}
