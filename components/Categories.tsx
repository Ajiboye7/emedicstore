import React from 'react';
import { HealthCategories} from '@/constants';

const Categories = () => {
  return (
    <section>
      {HealthCategories.map(cat =>(
        <div key= {cat.id}>
            
        </div>
      ))}
    </section>
  );
}

export default Categories;
