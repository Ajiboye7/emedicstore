import { title } from 'process';
import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title}:CustomButtonProps) => {
  return (
    <div>
      <button type='submit'
      className='flex items-center gap-2 bg-buttonBg rounded-full'>
        <span>{title}</span>
        <Image 
        alt='buttonIcon'
        src='/SVG.svg'
        width={10}
        height={10}
        className=''
        />
      </button>
    </div>
  );
}

export default CustomButton;
