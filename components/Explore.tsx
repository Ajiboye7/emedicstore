import React from "react";
import TextTitle from "./TextTitle";
import Image from "next/image";
import { Blog } from "@/constants";
const Explore = () => {
  return (
    <section className="max-w-[1440px] mx-auto mt-20 p-8">
      <div>
        <p>BLOG & ARTICLES</p>
        <TextTitle>Explore Our Blog & Articles</TextTitle>
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Blog.map((blog) => (
          <div key={blog.id}className="card border border-blue-200 rounded-3xl flex flex-col overflow-hidden">
            <div className="w-full h-[250px] overflow-hidden">
            <Image src={blog.img} alt={blog.alt} width={500} height={300} className="w-full h-full object-cover"/>
            </div>
            <div className="px-10 shadow-lg border border-gray-200 flex flex-col justify-between flex-grow gap-2">
            <p className="text-bodyText mt-5">8 Mins Read</p>
            <p className="text-2xl text-bodyText font-bold">{blog.body}</p>
            <div className="flex justify-between my-5">
              <div className="flex gap-2 items-center">
                <Image src='/frame.svg' alt="frame" width={20} height={20}/>
                <p>by Admin</p>
              </div>
              <div className="flex gap-2 items-center">
                <Image src='/calendar.svg' alt="calendar" width={20} height={20} />
                <p>16th November, 2023</p>
              </div>
            </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;

/*
import React from 'react';
import Image from 'next/image';
import TextTitle from './TextTitle'; // Make sure you have this component
import { Blog } from '@/constants'; // Ensure Blog is an array of objects with img, alt, and body properties

const Explore = () => {
  return (
    <section className="max-w-[1900px] mx-auto px-4 md:px-12 py-16">
      <div>
        <p className="text-xl font-semibold mb-2">BLOG & ARTICLES</p>
        <TextTitle>Explore Our Blog & Articles</TextTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Blog.map((blog, index) => (
            <div key={index} className="card p-6 shadow-lg rounded-lg border border-gray-200">
              <Image src={blog.img} alt={blog.alt} width={500} height={300} className="rounded-lg mb-4"/>
              <p className="text-sm text-gray-500 mb-2">8 Mins Read</p>
              <p className="text-lg font-semibold mb-4">{blog.body}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center">
                  <Image src="/frame.svg" alt="frame" width={20} height={20} className="mr-2"/>
                  <p>by Admin</p>
                </div>
                <div className="flex items-center">
                  <Image src="/calendar.svg" alt="calendar" width={20} height={20} className="mr-2"/>
                  <p>by Admin</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;

*/
