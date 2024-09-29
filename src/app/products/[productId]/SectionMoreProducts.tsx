import React from 'react';

import ProductCard from '@/components/ProductCard';
import { items } from '@/data/content';
import Heading from '@/shared/Heading/Heading';

const SectionMoreProducts = () => {
  return (
    <div>

      <Heading className="mb-0">Explore more products</Heading>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        {items.slice(4, 13).map((item) => (
          <ProductCard
            key={item.Name}
            product={item}
            className="border-neutral-300"
          /> 
        ))}
      </div>
    </div>
  );
};

export default SectionMoreProducts;
