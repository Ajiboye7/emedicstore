

/*import React from "react";
import TextTitle from "./TextTitle";
import { Testimonial } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container max-w-[1900px] mx-auto text-center px-4 md:px-12">
        <p className="text-bodyText mb-4">DON’T JUST TAKE OUR WORD FOR IT</p>
        <TextTitle textStyle="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-10">
          Here’s What Our <span className="font-bold">Customers</span> Say
        </TextTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {Testimonial.map((test, index) => (
            <div
              className="rounded-3xl p-[3px] bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd"
              style={{
                transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
              }}
            >
              <div
                key={test.id}
                className={`p-6 px-14 shadow-md rounded-3xl h-full bg-white transform transition-transform duration-300 gradient-border`}
              >
                <p className="text-bodyText text-left mb-4 text-conBody leading-loose">
                  {test.body}
                </p>
                <div className="w-50  h-[2px] bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd "></div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <p className="text-bodyText font-bold text-left">
                      {test.name}
                    </p>
                    <p className="text-bodyText text-left">{test.location}</p>
                  </div>
                  <Image
                    src={test.img}
                    alt={test.alt}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;*/

import React from "react";
import TextTitle from "./TextTitle";
import { Testimonial } from "@/constants";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center px-4 md:px-12">
        <p className="text-bodyText sub-title mb-4">DON’T JUST TAKE OUR WORD FOR IT</p>
        <TextTitle textStyle="text-3xl sm:text-4xl md:text-5xl xl:text-6xl mb-10">
          Here’s What Our <span className="font-bold">Customers</span> Say
        </TextTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Testimonial.map((test, index) => (
            <div
              key={test.id}
              className="rounded-3xl p-[3px] bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd"
              style={{
                transform: `rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
              }}
            >
              <div className="p-6 px-8 md:px-10 lg:px-12 lg:py-14 shadow-md rounded-3xl h-full bg-white transform transition-transform duration-300">
                <p className="text-bodyText text-left mb-14 testimonial-body">
                  {test.body}
                </p>
                <div className="w-full h-[2px] mb-4 bg-gradient-to-r from-primaryGradientStart to-primaryGradientEnd"></div>
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
                  <div className="flex flex-col items-start gap-1 md:gap-2">
                    <p className="text-bodyText font-bold text-left testimonial-name">
                      {test.name}
                    </p>
                    <p className="text-bodyText text-left testimonial-location">
                      {test.location}
                    </p>
                  </div>
                  <Image
                    src={test.img}
                    alt={test.alt}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

