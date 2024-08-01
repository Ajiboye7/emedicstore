import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <section>
      <div className="max-w-[1400px] mx-auto">
        <p className="text-center text-bodyText">
          TRUSTED & ENDORSED BY INDUSTRY PROFESSIONALS
        </p>
        <div className="partners flex items-center justify-center gap-6 md:gap-10 lg:gap-20 mt-10 mx-5 flex-wrap">
          <Image src="/NAFDAC.svg" alt="nafdac" width={270} height={70} />
          <Image src="/PCN.svg" alt="pcn" width={270} height={70} />
          <Image src="/Group.svg" alt="paystack" width={270} height={60} />
          <Image src="/Zenith.svg" alt="zenith" width={70} height={40} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
