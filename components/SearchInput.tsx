/*import React from 'react';
import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="w-[580px] mt-10 relative">
      <input
        type="text"
        placeholder="Enter Product, Active Ingredient or Manufacturer's name"
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute p-3 pointer-events-none left-[500px] top-[-10px] bg-black rounded-r-full">
        <Image
          src="/Search Icon.svg"
          alt="Search"
          width={40}
          height={40}
          className='bg-black'
        />
      </div>
    </div>
  );
};

export default SearchInput;*/


import React from 'react';
import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="w-[580px] relative">
      <input
        type="text"
        placeholder="Enter Product, Active Ingredient or Manufacturer's name"
        className="w-full h-[50px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"

  );
};

export default SearchInput;

