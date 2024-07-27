import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import TextTitle from "./TextTitle";

const Header = () => {
  return (
    <header>
      <div className="container max-w-[1700px] mx-auto ">
        <div className="flex items-center gap-2">
          <Image
            src="/medal-star.svg"
            alt="medal star"
            width={20}
            height={20}
          />
          <p className="text-bodyText">AFRICA’S TOP HEALTHCARE MARKETPLACE</p>
        </div>
        <TextTitle text="Your Accessible & Budget-friendly  HealthCare Market." textStyle="text-6xl border border-solid border-green-300 max-w-[1200px]"/>
        <p className="max-w-[1000px] border border-solid border-red-300 text-bodyText">
          Experience healthcare that's effortlessly seamless, remarkably
          accessible, surprisingly affordable, and always conveniently tailored
          to you. No more long trips to the Pharmacy.
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
