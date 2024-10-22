"use client";

import React from "react";

export default function ItemSkill({ image = "", text = "" }) {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white px-4 py-2 flex gap-2 items-center text-black w-fit rounded-full"
    >
      <img src={`/${image}`} alt="image" className="h-4" />
      {text}
    </div>
  );
}
