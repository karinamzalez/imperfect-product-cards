import { useState } from "react";
import { ProductType } from '../types';

export default (initialValue: ProductType[]) => {
  const [ products, setProducts ] = useState<ProductType[]>(initialValue);

  // REMOVE DUPLICATE, HIGHER LEVEL CATEGORY (NON-PRODUCE/PRODUCE)
  const parsedProducts = (newProducts: ProductType[]) => { 
    return newProducts.map((product) => {
      product.categories = product.categories.filter(category => !['PRO', 'DRY'].includes(category.commonId));
      return product;
    });
  };

  return {
    products,
    addProducts: (newProducts: ProductType[]) => {
      // ADD NEW PRODUCTS TO CURRENTLY EXISTING LIST
      setProducts([...products, ...parsedProducts(newProducts)]);
    }
  };
};
