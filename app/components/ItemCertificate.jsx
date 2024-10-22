"use client";

import { Card } from "antd";
import React from "react";
import { TbCertificate } from "react-icons/tb";
import { FaRegEye } from "react-icons/fa";

export default function ItemCertificate({
  logo = "",
  lembaga = "",
  title = "",
  link = "",
}) {
  return (
    <Card data-aos="zoom-in" className="rounded-3xl border-none">
      <div className="flex justify-between gap-3 md:items-center">
        <div className="bg-black rounded-full items-center flex gap-1 p-1 pr-3">
          <div className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full overflow-hidden">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <p className="text-yellow-500 text-xl font-bold">{lembaga}</p>
          </div>
        </div>
        <div>
          <TbCertificate className="text-5xl" />
        </div>
      </div>

      <div className="mt-5 font-bold text-lg">
        <p>{title}</p>
      </div>

      <div className="mt-5">
        <a
          className="px-4 py-2 flex gap-1 w-fit items-center bg-gray-200 border-2 border-gray-600 hover:text-black hover:bg-yellow-500 rounded-full"
          href={link}
        >
          <FaRegEye className="text-lg" />
          View
        </a>
      </div>
    </Card>
  );
}
