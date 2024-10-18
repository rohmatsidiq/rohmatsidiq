import { Card } from "antd";

export default function ItemStack({ image = "", text = "" }) {
  return (
    <div
      data-aos="zoom-in"
      className="bg-white px-4 py-2 flex gap-2 text-[12px] items-center text-black w-fit rounded-full"
    >
      <img src={`/${image}`} alt="react" className="h-4" />
      {text}
    </div>
  );
}
