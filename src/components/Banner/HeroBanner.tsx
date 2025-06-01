import React from "react";
import herobanner from "@/assets/hero.png";
import iphone from "@/assets/apple.png";
import { ArrowRight } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="bg-black text-white px-6 py-12">
      <div className="flex  items-center justify-between">
        <div className="flex flex-col items-start justify-center  gap-10">
          <div className="logo flex items-center gap-4">
            <img src={iphone} alt="" />
            <p>iPhone 14 Series</p>
          </div>
          <h3 className="text-6xl">Up to 10% off Voucher</h3>
          <button className="flex items-center hover:border-b hover:cursor-pointer">
            Shop Now{" "}
            <span>
              <ArrowRight />
            </span>
          </button>
        </div>
        <div className="image">
          <img src={herobanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
