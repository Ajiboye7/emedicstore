import React from "react";
import TextTitle from "./TextTitle";
import CustomButton from "./CustomButton";

const Vendor = () => {
  return (
    <section className="w-full gradient-header">
      <div className="flex flex-col gap-4 sm:gap-10 items-center mx-auto py-10 sm:py-20">
        <p className="text-bodyText sub-title">JOIN OUR SUPPLIER NETWORK</p>
        {/*text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl */}
        <TextTitle textStyle=" text-center">
        Become a <span className="font-bold">Vendor</span> Partner
        </TextTitle>
        <p className="lg:max-w-[850px] px-5 mx-auto text-center text-bodyText text-body">Empower your brand as a vendor on the eMedicStore platform. Unlock new opportunities and reach wider audiences, when you feature your products on eMedics Store</p>
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
