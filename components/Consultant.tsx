import React from 'react';
import Image from 'next/image';
import TextTitle from './TextTitle';
import { Consult } from '@/constants';
import CustomButton from "./CustomButton";

const Consultant = () => {
  return (
    <section className='max-w-[1900px] mx-auto items-center justify-center px-12 pt-12 pb-20'>
      <p className='text-center text-bodyText'>INSTANT HEALTH INSIGHTS</p>
      <div className='content w-full flex flex-col items-center md:flex-row gap-12 mt-10'>
        <div className='md:w-1/2 xl:w-1/3'>
          <Image src='/Consultant PS ED 1.svg' alt='consultantImage' width={600} height={600}/>
        </div>
        <div className='md:w-1/2 xl:w-2/3'>
          <TextTitle textStyle=' text-4xl 2xl:text-conTitle mb-12'>Specialist <span className='font-bold'>Consultation<br/></span> at Your Fingertips.</TextTitle>
          <p className='text-bodyText text-conBody 2xl:text-2xl mb-8 leading-relaxed'>Unlock personalized care with our online chat consultation. Connect with certified specialists, share images and videos for swift, expert solutions.</p>
          {Consult.map((con) => (
            <div key={con.id} className='flex items-center gap-1 mb-5'>
              <Image src={con.img} alt={con.alt} width={20} height={20}/>
              <p className='text-bodyText'>{con.body}</p>
            </div>
          ))}
          <div className='mt-12'>
          <CustomButton
          title="Talk to a specialist"
          buttonStyle="bg-primary-button px-5 py-4"
          iconStyle=""
          Icon="/SVG2.svg"
          titleStyle="text-btnTextSecondary"
        />
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Consultant;

{/*
    
    import React from 'react';
import Image from 'next/image';
import TextTitle from './TextTitle';
import { Consult } from '@/constants';
import CustomButton from "./CustomButton";

const Consultant = () => {
  return (
    <section className='max-w-[1900px] mx-auto items-center justify-center px-4 md:px-12 pt-12 pb-20'>
      <p className='text-center text-bodyText'>INSTANT HEALTH INSIGHTS</p>
      <div className='content flex flex-col md:flex-row gap-12 mt-10 items-center'>
        <div className='w-full md:w-1/3 flex justify-center'>
          <Image src='/Consultant PS ED 1.svg' alt='consultantImage' width={600} height={600} />
        </div>
        <div className='w-full md:w-2/3'>
          <TextTitle textStyle='text-3xl sm:text-4xl md:text-5xl 2xl:text-conTitle mb-8 md:mb-12 text-center md:text-left'>
            Specialist <span className='font-bold'>Consultation<br /></span> at Your Fingertips.
          </TextTitle>
          <p className='text-bodyText text-base sm:text-lg md:text-conBody 2xl:text-2xl mb-8 leading-relaxed text-center md:text-left'>
            Unlock personalized care with our online chat consultation. Connect with <br className="hidden md:block" /> certified specialists, share images and videos for swift, expert solutions.
          </p>
          {Consult.map((con) => (
            <div key={con.id} className='flex items-center gap-1 mb-5 text-center md:text-left'>
              <Image src={con.img} alt={con.alt} width={20} height={20} />
              <p className='text-bodyText'>{con.body}</p>
            </div>
          ))}
          <div className='mt-8 md:mt-12 flex justify-center md:justify-start'>
            <CustomButton
              title="Talk to a specialist"
              buttonStyle="bg-primary-button px-5 py-4"
              iconStyle=""
              Icon="/SVG2.svg"
              titleStyle="text-btnTextSecondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultant;
*/}
