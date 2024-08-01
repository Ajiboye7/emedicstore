import React from 'react';
import { HealthCategories} from '@/constants';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Categories = () => {
  return (
    <section>
      {HealthCategories.map(cat =>(
        <div key= {cat.id}>
            <p>{cat.title}</p>
            <Image src={cat.img}  alt={cat.alt} width={ 200} height={200}/>
            <div className='button'>
                <CustomButton/>
            </div>
        </div>
      ))}
    </section>
  );
}

export default Categories;
