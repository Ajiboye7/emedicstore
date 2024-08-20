import React from 'react';
import { AppButtonProps } from '@/types';
import Image from 'next/image';

const AppButton = ({ title, containerStyles, Icon, textStyles,imageStyle,line1Styles,line2Styles }: AppButtonProps) => {
    const titleLines = title.split('<br>');
  
    return (
      <div>
                <div key={index} className={line1Styles}>{line}</div>
              ) : (
                <div key={index} className={line2Styles}>{line}</div>
              )
            ))}
          </div>
          {Icon && (
            <div className="flex-shrink-0">
              <Image src={Icon} alt="icon" width={20} height={20} className={`${imageStyle}`} />
            </div>
          )}
        </button>
      </div>
    );
  };
  
  export default AppButton;