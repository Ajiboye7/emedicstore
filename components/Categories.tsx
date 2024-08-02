import React from "react";
import { HealthCategories } from "@/constants";
import Image from "next/image";
import CustomButton from "./CustomButton";
import TextTitle from "./TextTitle";

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container max-w-[1900px] mx-auto">
        <div className="text-center">
          <p className="text-bodyText">OUR BEST-SELLING CATEGORIES</p>
          <TextTitle textStyle="text-7xl my-10">YOUR GO-T CATEGORIES</TextTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {HealthCategories.map((cat) => (
          <div key={cat.id} className=" p-6 shadow-md mx-auto rounded-3xl"  style={{
            border: `1px solid ${cat.borderColor}`,
          }}>
            <p className="text-4xl text-categoryTextTitle font-semibold">{cat.title}</p>
            <Image src={cat.img} alt={cat.alt} width={500} height={500} className="my-8 mx-auto"/>
            <div className="button">
              <CustomButton
                title="Explore now"
                buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-5 py-4"
                iconStyle=""
                Icon="/SVG.svg"
                titleStyle="text-btnTextPrimary"
              />
            </div>
          </div>
        ))}
        </div>
        <CustomButton
            title="Browse all Categories"
            buttonStyle="bg-primary-button px-5 py-4 mx-auto mt-14"
            iconStyle=""
            Icon="/SVG2.svg"
            titleStyle="text-btnTextSecondary"
          />
      </div>
    </section>
  );
};

export default Categories;


/*import React from "react";
import { HealthCategories } from "@/constants";
import Image from "next/image";
import CustomButton from "./CustomButton";
import TextTitle from "./TextTitle";

const Categories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">OUR BEST-SELLING CATEGORIES</p>
          <TextTitle textStyle="text-2xl md:text-3xl font-bold">YOUR GO-TO CATEGORIES</TextTitle>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HealthCategories.map((cat) => (
            <div key={cat.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-xl font-semibold mb-4">{cat.title}</p>
              <Image src={cat.img} alt={cat.alt} width={500} height={500} className="mx-auto mb-4" />
              <div className="button">
                <CustomButton
                  title="Explore now"
                  buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-5 py-4"
                  iconStyle=""
                  Icon="/SVG.svg"
                  titleStyle="text-btnTextPrimary"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;*/

