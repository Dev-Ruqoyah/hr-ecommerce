import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
interface SectionSubHeader {
  subheader: string;
}

const SectionSubHeader: React.FC<SectionSubHeader> = ({ subheader }) => {
  return (
    <div className="flex justify-between items-center mt-5 ">
      <h3 className="text-3xl font-semibold">{subheader}</h3>
      <div className="flex  items-center gap-2">
        <div className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <ArrowLeft className=" h-5 w-5  text-3xl rounded-full" />
        </div>
        <div className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
          <ArrowRight className=" h-5 w-5  text-3xl rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SectionSubHeader;
