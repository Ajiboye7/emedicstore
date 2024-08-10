import React from 'react';
import TextTitle from './TextTitle';
import AppButton from './AppButton';
import Image from 'next/image';

const GetStarted = () => {
  return (
    <section className='max-w-[1440px] mx-auto p-10 pb-0 pt-24  gradient-header rounded-3xl'>
      <div className='flex flex-col max-w-[1440px] mx-auto'>
        <div className='flex flex-col justify-center items-center gap-12 mb-8 '>
        <TextTitle textStyle=' text-2xl sm:text-4xl md:text-6xl xl:text-7xl '>Get Our <span className='font-bold'> App</span> Today</TextTitle>
        <p className='md:w-[700px] text-center sm:text-lg md:text-xl xl:text-2xl text-bodyText leading-relaxed'>Experience healthcare at your fingertips—get our app for easy access to quality healthcare anytime, anywhere.</p>
        </div>
        <div className='flex lg:flex-row flex-col gap-10 justify-around items-center'>
            <Image src= '/Samsung Galaxy S20 5G.svg' alt='screen'  width={300} height={300}/>
            <div className='flex gap-5 flex-wrap justify-center items-center'>
            <AppButton 
            title="Get it on<br> Google Play"
            Icon="/Icon (1).svg"
            imageStyle="w-4 md:w-8 lg:w-10 xl:w-16 sm:ml-2"
            containerStyles="flex-row-reverse bg-customBg"
            line2Styles="font-bold md:text-3xl lg:text-4xl"
            line1Styles="md:text-2xl lg:text-2xl md:mr-16 lg:mr-24"
            textStyles='text-white'
            />
            <AppButton 
             title="Download on the<br> App Store" 
             Icon="/Icon.svg" 
             imageStyle="w-5 md:w-8 lg:w-10 xl:w-16 sm:ml-2"
             containerStyles="flex-row-reverse bg-customBg"
             line2Styles="font-bold md:text-3xl lg:text-4xl"
             line1Styles="text-1xl md:text-2xl"
             textStyles='text-white'
            />
            </div>
            <Image src= '/Space Black.svg' alt='screen'  width={300} height={300}/>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;

{/*
    
 
            src="/Space Black.svg"
            alt="screen"
            width={300}
            height={300}
            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
*/}
