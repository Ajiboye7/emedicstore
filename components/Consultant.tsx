import React from 'react';
import Image from 'next/image';
import TextTitle from './TextTitle';
import { Consult } from '@/constants';
import CustomButton from "./CustomButton";

const Consultant = () => {
  return (
    <section className='max-w-[1800px] mx-auto items-center justify-center px-12 pt-12 pb-20'>
      <p className='text-center text-bodyText'>INSTANT HEALTH INSIGHTS</p>
      <div className='content w-full flex gap-8 mt-10'>
        <div className='w-1/3'>
          <Image src='/Consultant PS ED 1.svg' alt='consultantImage' width={600} height={600}/>
        </div>
        <div className='w-2/3'>
          <TextTitle textStyle=' text-6xl 2xl:text-conTitle mb-12'>Specialist <span className='font-bold'>Consultation<br/></span> at Your Fingertips.</TextTitle>
          <p className='text-bodyText text-2xl mb-8 leading-relaxed'>Unlock personalized care with our online chat consultation. Connect with certified specialists, share images and videos for swift, expert solutions.</p>
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
