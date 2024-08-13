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


/*import React from 'react';
import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="w-[580px] relative">
      <input
        type="text"
        placeholder="Enter Product, Active Ingredient or Manufacturer's name"
        className="w-full h-[50px] pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-black rounded-r-full h-full p-5">
        <Image
          src="/Search Icon.svg"
          alt="Search"
          width={20}
          height={20}
          className=''
          /*right-0 top-1/2 transform -translate-y-1/2 
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
    <div className="w-full md:w-[366px] relative mt-4 md:mt-0">
      <input
        type="text"
        placeholder="Enter Product, Active Ingredient or Manufacturer's name"
        className="w-full h-[40px] pl-4 pr-16 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 search-input-text"
      />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center bg-black rounded-r-full h-full p-3">
        <Image
          src="/Search Icon.svg"
          alt="Search"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default SearchInput;

