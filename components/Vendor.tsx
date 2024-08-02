import React from "react";
import TextTitle from "./TextTitle";
import CustomButton from "./CustomButton";

const Vendor = () => {
  return (
    <section className="w-full gradient-header">
      <div className="flex flex-col gap-10 items-center mx-auto py-20">
        <p className="text-bodyText">JOIN OUR SUPPLIER NETWORK</p>
        <TextTitle textStyle="text-8xl">
        Become a <span className="font-bold">Vendor</span> Partner
        </TextTitle>
        <p className="max-w-[850px] mx-auto text-center text-bodyText text-base sm:text-lg md:text-xl xl:text-2xl ">Empower your brand as a vendor on the eMedicStore platform. Unlock new opportunities and reach wider audiences, when you feature your products on eMedics Store</p>
        <div>
        <CustomButton
            title="Become a vendor"
            buttonStyle="border-2 border-solid border-blue-500 px-5 py-4"
            iconStyle=""
            Icon="/SVG.svg"
            titleStyle="text-btnTextPrimary"
          />
        </div>
      </div>
    </section>
  );
};

export default Vendor;
