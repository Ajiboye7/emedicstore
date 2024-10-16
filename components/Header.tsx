
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import TextTitle from "./TextTitle";

const Header = () => {
  return (
    <header className="gradient-header pb-20  py-[8rem] sm:py-36 md:py-52">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/medal-star.svg"
            alt="medal star"
            width={20}
            height={20}
          />
          <p className="text-bodyText sub-title">
            AFRICA’S TOP HEALTHCARE MARKETPLACE
          </p>
        </div>
        {/*text-3xl sm:text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl*/}
        <TextTitle textStyle=" mb-4 sm:my-8 md:my-[2rem] max-w-[1400px] !sm:text-[40px] !xs:leading-[35px]">
          Your <span className="font-bold">Accessible & Budget-</span><br />
          <span className="font-bold">friendly HealthCare</span> Market.
        </TextTitle>
        <p className="header-text-body max-w-[435px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[650px] xl:max-w-[800px] text-bodyText sm:mb-10">
          Experience healthcare that's effortlessly seamless, remarkably
          accessible, surprisingly affordable, and always conveniently tailored
          to you. No more long trips to the Pharmacy.
        </p>
        <div className="flex flex-row items-center gap-5 pt-6">
          <CustomButton
            title="Order Now"
            buttonStyle="bg-primary-button p-[10px] xs:px-5 xs:py-4"
            iconStyle=""
            Icon="/SVG2.svg"
            titleStyle="text-btnTextSecondary"
          />
          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 p-[10px] xs:px-5 xs:py-4"
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

