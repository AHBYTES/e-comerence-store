'use client';

import React from 'react';

import { items } from '@/data/content';
import Slider from '@/shared/Slider/Slider';

import ProductCard from './ProductCard';

const data = items.slice(3, 9);

const ProductSlider = () => {
  return (
    <div className="">
      <Slider
        itemPerRow={4}
        data={data}
        renderItem={(item) => {
          if (!item) {
            return null;
          }
          return (
            <ProductCard showPrevPrice product={{ ...item, Name: item.Name, Category: item.Category }} className="bg-white" />
          );
        }}
      />
    </div>
  );
};

export default ProductSlider;
