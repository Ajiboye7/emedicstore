import { TextTitleProps } from '@/types';

const TextTitle = ({text ,textStyle}:TextTitleProps) => {
  return (
    <h1 className={`text-4xl font-bold gradient-text ${textStyle}`}>
     {text}
     
    </h1>
  );
}

export default TextTitle;
