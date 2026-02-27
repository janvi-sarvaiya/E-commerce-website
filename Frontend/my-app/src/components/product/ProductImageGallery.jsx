import React, { useState } from "react";

export default function ProductImageGallery({ product }) {
  const [activeImage, setActiveImage] = useState(product.image[0]?.url);
  return (
    <div className="flex items-center gap-7">
      <div className="space-y-4">
        {product.image?.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt="thumbnail"
            onClick={() => setActiveImage(img.url)}
            className="w-45 h-30 p-4 bg-[#F5F5F5] rounded cursor-pointer"
          />
        ))}
      </div>
      <div className="bg-[#F5F5F5] h-full w-full rounded flex items-center justify-center">
        <img src={activeImage} alt={product.name} className="w-75 h-75 " />
      </div>
    </div>
  );
}
