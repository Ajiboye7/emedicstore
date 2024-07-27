import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 border border-solid border-blue-500">
      <div className="container mx-auto flex items-center justify-between px-4 border max-w-[1700px] border-solid border-blue-300 ">
        <Image src="/Logo.svg" alt="logo" width={150} height={150}/>

        <div className="flex items-center space-x-6">
          {NavLinks.map((link) => (
            <Link href={link.url} key={link.id} className="text-gray-700 hover:text-blue-500">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <SearchInput />

          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
          />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-primary-button px-4 py-2"
            iconStyle=""
            Icon="/SVG2.svg"
          />

          <div className="relative">
            <Image
              src='/Cart.svg'
              alt="cart"
              width={40}
              height={40}
              className="inline-block"
            />
            <Image
              src='/Cart Number.svg'
              alt='cart number'
              width={23}
              height={23}
              className="absolute left-6 top-0.5 transform -translate-y-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
