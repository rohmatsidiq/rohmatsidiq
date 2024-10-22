"use client";

import { Card } from "antd";
import Title from "../items/Title";
import { MdOutlineDateRange } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";

export default function Experience() {
  return (
    <div className="p-5 py-20 max-w-5xl mx-auto">
      <div className="text-yellow-500 text-center">
        <Title>
          <span className="text-yellow-500">Experience</span>
        </Title>
      </div>
      <div className="mt-5">
        <Card data-aos="zoom-in" className="rounded-3xl border-none">
          <div className="flex flex-col md:flex-row justify-between gap-3 md:items-center">
            <div className="bg-black rounded-full items-center flex gap-3 p-3">
              <div className="w-[50px] h-[50px] bg-white p-3 rounded-full overflow-hidden">
                <img src="/muslimafiyah.png" alt="" />
              </div>
              <div className="">
                <p className="text-yellow-500 text-lg font-bold">
                  Muslimafiyah Publishing
                </p>
                <p className="text-white">Yogyakarta, Indonesia</p>
              </div>
            </div>
            <div>
              <div className="bg-yellow-100 px-4 py-2 rounded-full font-bold flex gap-1 items-center">
                <MdOutlineDateRange className="text-xl" />
                <p>JANUARI 2022 - SEKARANG</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-xl">
              Fullstack Web Developer (Fullstack Javascript)
            </h3>
            <div className="mt-3">
              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Designing and developing a website using Next.js, Express.js,
                  and MySQL
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>
                  Integration with a shipping company for checking shipping
                  costs and tracking deliveries
                </p>
              </div>

              <div className="flex gap-1 items-center">
                <div>
                  <IoArrowRedo />
                </div>
                <p>Performing maintenance and adding new features</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
