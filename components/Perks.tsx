import React from "react";
import { Perks as perksData } from "@/constants";
import Image from "next/image";
import TextTitle from "./TextTitle";
import CustomButton from "./CustomButton";

const Perks = () => {
  return (
    <section className="container px-4 py-8 max-w-[1900px] mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8 max-w-[1900px] mx-auto">
        {/* Left Write-up */}
        <div className="w-full lg:w-2/3">
          <p className="text-bodyText">The eMEDICstore LIFESTYLE</p>
          <TextTitle textStyle="md:text-6xl xl:text-7xl 2xl:text-textTitle font-normal mt-10 ">
            Seamless. Trusted. Affordable. Accessible.
          </TextTitle>
          <p className="text-bodyText mb-4 mt-10 md:text-perkBodyMd lg:text-perkBodyLg 2xl:text-perkBody leading-relaxed">
            With eMedics, the advantages are endless, offering a comprehensive
            healthcare experience that seamlessly integrates trust,
            affordability, and accessibility into every aspect of your
            well-being journey.
          </p>
          <div className="button flex items-center gap-5 pt-6">
            <CustomButton
              title="Get Started"
              buttonStyle="bg-primary-button px-5 py-4"
              iconStyle=""
              Icon="/SVG2.svg"
              titleStyle="text-btnTextSecondary"
            />
            <CustomButton
              title="About Us"
              buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-5 py-4"
              iconStyle=""
              Icon="/SVG.svg"
              titleStyle="text-btnTextPrimary"
            />
          </div>
        </div>

        {/* Right Main Card */}
        <div className="w-full md:w-1/3 hidden lg:block ">
          <div
            className="bg-white shadow-md pt-20 pb-20 px-10 rounded-3xl"
            style={{
              border: `2px solid ${perksData[0].imgBgColor}`, 
            }}
          >
            <div className="relative flex items-center justify-center mb-14 w-20 h-20 rounded-full">
              <div
                className=" absolute inset-[-15px] rounded-full"
                style={{
                  backgroundColor: perksData[0].imgBgColor,
                  opacity: 0.2,
                }}
              ></div>
              <Image
                src={perksData[0].img}
                alt={perksData[0].alt}
                width={50}
                height={50}
                className="relative rounded-full"
              />
            </div>
            <h3 className="text-perkHead font-bold mb-4 text-perkTitle">
              {perksData[0].title}
            </h3>
            <p className="text-bodyText mb-4 max-w-[300px] leading-loose">
              {perksData[0].body}
            </p>
          </div>
        </div>
      </div>

      {/* Other Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div
          className="bg-white shadow-md pt-20 pb-20 px-10 rounded-3xl lg:hidden"
          style={{
            border: `2px solid ${perksData[0].imgBgColor}`,
          }}
        >
          <div className="relative flex items-center justify-center mb-14 w-20 h-20 rounded-full">
            <div
              className=" absolute inset-[-15px] rounded-full"
              style={{
                backgroundColor: perksData[0].imgBgColor,
                opacity: 0.2,
              }}
            ></div>
            <Image
              src={perksData[0].img}
              alt={perksData[0].alt}
              width={50}
              height={50}
              className="relative rounded-full"
            />
          </div>
          <h3 className="text-perkHead font-bold mb-4 text-perkTitle">
            {perksData[0].title}
          </h3>
          <p className="text-bodyText mb-4 max-w-[300px] leading-loose">
            {perksData[0].body}
          </p>
        </div>
        {perksData.slice(1).map((perk) => (
          <div
            key={perk.id}
            className="bg-white shadow-md py-14 px-10 rounded-3xl w-full"
            style={{
              border: `1px solid ${perk.imgBgColor}`,
            }}
          >
            <div className="relative flex items-center justify-center mb-14 w-20 h-20 rounded-full">
              <div
                className=" absolute inset-[-15px] rounded-full"
                style={{
                  backgroundColor: perk.imgBgColor,
                  opacity: 0.2,
                }}
              ></div>
              <Image
                src={perk.img}
                alt={perk.alt}
                width={50}
                height={50}
                className="relative rounded-full"
              />
            </div>
            <h3 className="text-perkHead font-bold mb-4 text-perkTitle">
              {perk.title}
            </h3>
            <p className="text-bodyText mb-4 max-w-[290px] leading-loose">
              {perk.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perks;
