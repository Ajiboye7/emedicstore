import { gradientTextProps } from '@/types';
import React from 'react';

const GradientText = ({text, textStyle}:gradientTextProps) => {
  return (
    <h1 className={`text-4xl font-bold gradient-text ${textStyle}`}>
      {text}
    </h1>
  );
}

export default GradientText;
