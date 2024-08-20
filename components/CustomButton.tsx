import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, buttonStyle,iconStyle,Icon,titleStyle}: CustomButtonProps) => {
  return (
    <div>
      <button type='submit' className={`flex items-center gap-2 rounded-full whitespace-nowrap ${buttonStyle}`}>
        <span className={`${titleStyle} btn-text`}>{title}</span>
        <Image 
          alt='buttonIcon'
          src={Icon}
          width={10}
          height={10}
          className={`${iconStyle}`}
        />
      </button>
    </div>
  );
}

export default CustomButton;
