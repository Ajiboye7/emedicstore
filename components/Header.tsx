import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import TextTitle from "./TextTitle";

const Header = () => {
  return (
    <header>
      <div className="container max-w-[1700px] mx-auto ">
      o more long trips to the Pharmacy.
        </p>
        <div className="button flex items-center gap-5">
          <CustomButton
            title="Order Now"
            buttonStyle="bg-primary-button px-4 py-2"
            iconStyle=""
            Icon="/SVG2.svg"
          />
          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
