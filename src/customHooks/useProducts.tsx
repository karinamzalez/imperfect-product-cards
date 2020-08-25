import { useState } from "react";
import { Product } from '../types';

export default (initialValue: Product[]) => {
  const [ products, setProducts ] = useState<Product[]>(initialValue);

  return {
    products,
    addProducts: (newProducts: Product[]) => {
      // ADD NEW PRODUCTS TO CURRENTLY EXISTING LIST
      setProducts([...products, ...newProducts]);
    }
  };
};
