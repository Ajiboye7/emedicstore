"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="bg-white shadow-md px-4 z-50 fixed top-0 left-0 w-full">
      <div className="container h-[80px] mx-auto flex items-center justify-between px-4">
        <Image src="/Logo.svg" alt="logo" width={150} height={150} />

        <div className="hidden md:flex items-center space-x-6 border-l-2 md:pl-10 lg:pl-28 xl:pl-3 2xl:pl-10 px-1">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-gray-700 hover:text-green-500 nav-text whitespace-nowrap"
            >
              {link.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center xl:hidden">
          <div className="relative mr-4">
            <Image
              src="/Cart.svg"
              alt="cart"
              width={40}
              height={40}
              className="inline-block "
            />
            <Image
              src="/Cart Number.svg"
              alt="cart number"
              width={20}
              height={20}
              className="absolute left-6 top-0.5 transform -translate-y-1"
            />
          </div>
          <button
            type="button"
            className="text-borderGradientStart focus:outline-none focus:text-green-500"
            onClick={toggleMenu}
          >
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="w-6 h-6"
            />
          </button>
        </div>

        <div className=" hidden xl:flex items-center space-x-4">
          <div className=" flex items-center space-x-4">
            <SearchInput />

            <CustomButton
              title="Become a vendor"
              buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
              iconStyle=""
              Icon="/SVG.svg"
              titleStyle="text-btnTextPrimary"
            />
            <CustomButton
              title="Sign Up"
              buttonStyle="bg-primary-button px-4 py-2"
              iconStyle=""
              Icon="/SVG2.svg"
              titleStyle="text-btnTextSecondary"
            />
          </div>

          <div className="relative">
            <Image
              src="/Cart.svg"
              alt="cart"
              width={40}
              height={40}
              className="inline-block w-[45px]"
            />
            <Image
              src="/Cart Number.svg"
              alt="cart number"
              width={15}
              height={15}
              className="absolute left-8 top-0.5 transform -translate-y-1"
            />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="xl:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 md:flex items-center justify-center gap-10">
          <div className="md:hidden">
          {NavLinks.map((link) => (
            <Link href={link.url} key={link.id} className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md nav-text">
              {link.title}
            </Link>
          ))}
          </div>
         
          <SearchInput  />

          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
            titleStyle="text-btnTextPrimary"
          />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-primary-button px-4 py-2"
            iconStyle=""
            Icon="/SVG2.svg"
            titleStyle="text-btnTextSecondary"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

/*import React, { useState } from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md px-4 overflow-hidden ">
      <div className="container h-[80px] mx-auto flex items-center justify-between px-4 border border-solid border-blue-600">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image src="/Logo.svg" alt="logo" width={150} height={150}  className="w-[116px] h-[27px]"/>
          <div className="flex items-center md:hidden">
            <div className="relative mr-4">
              <Image
                src='/Cart.svg'
                alt="cart"
                width={40}
                height={40}
                className="inline-block "
              />
              <Image
                src='/Cart Number.svg'
                alt='cart number'
                width={20}
                height={20}
                className="absolute left-6 top-0.5 transform -translate-y-1"
              />
            </div>
            <button
              type="button"
              className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4 pl-10 border-l-2 border-gray-200">
          {NavLinks.map((link) => (
            <Link href={link.url} key={link.id} className="text-gray-700 nav-text hover:text-blue-500 whitespace-nowrap">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <SearchInput />

          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
            titleStyle="text-btnTextPrimary"
          />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-primary-button px-4 py-2"
            iconStyle=""
            Icon="/SVG2.svg"
            titleStyle="text-btnTextSecondary"
          />
          
          <div className="relative">
            <Image
              src='/Cart.svg'
              alt="cart"
              width={40}
              height={40}
              className="inline-block w-[45px]"
            />
            <Image
              src='/Cart Number.svg'
              alt='cart number'
              width={15}
              height={15}
              className="absolute left-8 top-0.5 transform -translate-y-1"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu *
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavLinks.map((link) => (
            <Link href={link.url} key={link.id} className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md nav-text">
              {link.title}
            </Link>
          ))}
          <SearchInput  />

          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
            titleStyle="text-btnTextPrimary"
          />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-primary-button px-4 py-2 mt-4"
            iconStyle=""
            Icon="/SVG2.svg"
            titleStyle="text-btnTextSecondary"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;*/

/*import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import Link from "next/link";
import SearchInput from "./SearchInput";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 border-b border-solid border-blue-500">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 max-w-[1700px] border-b border-solid border-blue-300">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image src="/Logo.svg" alt="logo" width={150} height={150} />

          <div className="md:hidden">
            {/* Hamburger Menu for Mobile 
            <button type="button" className="text-gray-700 hover:text-blue-500 focus:outline-none focus:text-blue-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 pl-20 border-l-2 border-gray-200">
          {NavLinks.map((link) => (
            <Link href={link.url} key={link.id} className="text-gray-700 hover:text-blue-500">
              {link.title}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <SearchInput />

          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
             titleStyle="text-btnTextPrimary"
          />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-primary-button px-4 py-2"
            iconStyle=""
            Icon="/SVG2.svg"
             titleStyle="text-btnTextSecondary"
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

      {/* Mobile Menu 
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NavLinks.map((link) => (
            <Link href={link.url} key={link.id} className="block text-gray-700 hover:text-blue-500 px-3 py-2 rounded-md text-base font-medium">
              {link.title}
            </Link>
          ))}
          <SearchInput />

          <CustomButton
            title="Become a vendor"
            buttonStyle="bg-secondary-button border-2 border-solid border-blue-500 px-4 py-2"
            iconStyle=""
            Icon="/SVG.svg"
             titleStyle="text-btnTextPrimary"
          />
          <CustomButton
            title="Sign Up"
            buttonStyle="bg-primary-button px-4 py-2"
            iconStyle=""
            Icon="/SVG2.svg"
             titleStyle="text-btnTextSecondary"
          />

          <div className="relative mt-4">
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

export default Navbar;*/
