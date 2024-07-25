import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <Image src="/Logo.svg" alt="logo" width={150} height={150} />
        {NavLinks.map((link) => (
          <div className="nav-links" key={link.id}>
            <Link href={link.url}>{link.title}</Link>
          </div>
        ))}
        <SearchInput />
        <CustomButton title="Become a vendor" buttonStyle="bg-secondary-button border-b-2 border-solid border-blue-500" iconStyle="" Icon="/SVG.svg" />
        <CustomButton title="Sign Up" buttonStyle="bg-primary-button px-4 py-3" iconStyle="" Icon="/SVG2.svg"/>
        
      </div>
    </nav>
  );
};

export default Navbar;
