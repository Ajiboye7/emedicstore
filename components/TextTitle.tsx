import { TextTitleProps } from '@/types';

const TextTitle = ({ children, textStyle }: TextTitleProps) => {
  return (
    <h1 className={`text-4xl gradient-text ${textStyle}`}>
      {children}
    </h1>
  );
}

export default TextTitle;
