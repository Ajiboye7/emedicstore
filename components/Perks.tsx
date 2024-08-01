import React from "react";
import { Perks as perksData } from "@/constants";
import Image from "next/image";

const Perks = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
        {/* Left Write-up */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl font-bold mb-4">
            Your Accessible & Budget-friendly HealthCare Market
          </h2>
          <p className="text-bodyText mb-4">
            Experience healthcare that's effortlessly seamless, remarkably
            accessible, surprisingly affordable, and always conveniently
            tailored to you. No more long trips to the Pharmacy.
          </p>
        </div>

        {/* Right Main Card */}
        <div className="w-full md:w-1/3">
          <div className="bg-white shadow-md py-14 px-10 rounded-lg">
             <div className="relative flex items-center justify-center mb-14 w-20 h-20 rounded-full">
              <div
                className=" absolute inset-[-15px] rounded-full"
                style={{
                  backgroundColor: perksData[0].imgBgColor,
                  opacity: 0.2,
                }}
              ></div>
              <Image src={perksData[0].img} alt={perksData[0].alt} width={50} height={50} className="relative rounded-full"/>
            </div>
            <h3
              className="text-perkHead font-bold mb-4 text-perkTitle">
              {perksData[0].title}
            </h3>
            <p className="text-bodyText mb-4 max-w-[290px] leading-loose">{perksData[0].body}</p>
          </div>
        </div>
      </div>

      {/* Other Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {perksData.slice(1).map((perk) => (
          <div key={perk.id}className="bg-white shadow-md py-14 px-10 rounded-lg w-full">
          <div className="relative flex items-center justify-center mb-14 w-20 h-20 rounded-full">
           <div
             className=" absolute inset-[-15px] rounded-full"
             style={{
               backgroundColor: perk.imgBgColor,
               opacity: 0.2,
             }}
           ></div>
           <Image src={perk.img} alt={perk.alt} width={50} height={50} className="relative rounded-full"/>
         </div>
         <h3
           className="text-1xl font-bold mb-4 text-perkTitle">
           {perk.title}
         </h3>
         <p className="text-bodyText mb-4 max-w-[290px] leading-loose">{perk.body}</p>
       </div>
        ))}
      </div>
    </section>
  );
};

export default Perks;
