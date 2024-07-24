import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-content">
        <Image src="/Logo.svg" alt="logo" width={50} height={50} />
        {NavLinks.map((link) => (
          <div className="nav-links" key={link.id}>
            <Link href={link.url}>
            {link.title}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
