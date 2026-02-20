import React from "react";

export default function Title({ title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-5 h-10 bg-orange rounded"></div>
      <p className=" text-orange text-lg font-semibold">{title}</p>
    </div>
  );
}
