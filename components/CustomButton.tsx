import React from 'react';
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, buttonStyle,iconStyle,Icon,titleStyle}: CustomButtonProps) => {
  return (
    <div>
      <button type='submit' class
          width={10}
          height={10}
          className={`${iconStyle}`}
        />
      </button>
    </div>
  );
}

export default CustomButton;
