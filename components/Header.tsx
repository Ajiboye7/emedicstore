import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import TextTitle from "./TextTitle";

const Header = () => {
  return (
    <header className="gradient-header py-28">
    <div className="container max-w-[1700px] mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <Image
          src="/medal-star.svg"
          alt="medal star"
          width={20}
          height={20}
        />
        <p className="text-bodyText">AFRICA’S TOP HEALTHCARE MARKETPLACE</p>
      </div>
      <TextTitle textStyle="text-8xl my-14 max-w-[1400px]">
        Your <span className="font-bold">Accessible & Budget-</span><br />
        <span className="font-bold">friendly HealthCare</span> Market.
      </TextTitle>
      <p className="text-2xl max-w-[1200px] text-bodyText mb-10">
        Experience healthcare that's effortlessly seamless, remarkably
        accessible, surprisingly affordable, and always conveniently tailored
        to you. No more long trips to the Pharmacy.
      </p>
      <div className="button flex items-center gap-5 pt-6">
        <CustomButton
          title="Order Now"
          buttonStyle="bg-primary-button px-5 py-4"
          iconStyle=""
          Icon="/SVG2.svg"
          titleStyle="text-btnTextSecondary"
        />
        <CustomButton
          title="Become a vendor"
          buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-5 py-4"
          iconStyle=""
          Icon="/SVG.svg"
          titleStyle="text-btnTextPrimary"
        />
      </div>
    </div>
  </header>
  );
};

export default Header;
