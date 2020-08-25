// IMPORTS -----------------------------------
/* libraries */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { uniqBy } from 'lodash';
/* components */
import Product from './Product';
/* types */
import { CategoryObjType, CategoryName, 
  CategoryCommonId, ProductType } from './types';

interface ProductsProps {
  products: ProductType[],
  filter: CategoryName
}

type CategoryType = {
  id: CategoryCommonId,
  name: CategoryName
}

type HighLevelCategoryType = {
  id: 'PRO' | 'DRY',
  name: 'Produce' | 'Non-Produce'
}

// LOCAL VARS -------------------
const highLevelCategories: HighLevelCategoryType[] = [
  { id: "PRO", name: "Produce" },
  { id: "DRY", name: "Non-Produce" },
];


// COMPONENT -----------------------------------
const Products: React.FC<ProductsProps> = ({ products, filter }) => {
  // HOOKS ----------------------------------------------------
  const [ categories, setCategories ] = useState<CategoryType[]>([]);
  const [ filteredCategory, setFilteredCategory ] = useState<CategoryType | undefined>(undefined);

  useEffect(() => {
    // Filter Products for unique categories
    const categoryObjs: CategoryObjType[] = products.flatMap((product: ProductType) => product.categories);
    const categories: CategoryType[] = uniqBy(categoryObjs, 'commonId')
      .reduce((acc: CategoryType[], category: CategoryObjType) => {
        acc.push({ id: category.commonId, name: category.name });
        return acc;
      }, []);
    setCategories(categories);
  }, [products]);

  useEffect(() => {
    // Handle filter selected
    const category = categories.find(category => category.name === filter);
    setFilteredCategory(category || undefined);
  }, [filter]);

  // COMPONENT METHODS----------------------------------------------------
  const getFilteredProducts = (categoryId: CategoryCommonId) => {
    return products.filter(
      (product) =>
      product.categories[0] && product.categories[0].commonId === categoryId
    );
  };

  const getProduceCategories = (categoryId: "PRO" | "DRY") => {
    /* TODO: With more time, I would refactor this repetetive code and filter out 
      produce categories more programmatically (utilize fact that products all have two categories, 
      one for produce/non-produce and one more specific one) */
    const produceIds = ["fruit", "VEG"];
    const categoryArr = filteredCategory ? [filteredCategory] : categories;
    let produceCategories = categoryArr.filter((category) => produceIds.includes(category.id));
    let nonProduceCategories = categoryArr.filter((category) => !produceIds.includes(category.id));

    return categoryId === "PRO" ? produceCategories : nonProduceCategories;
  };


  // JSX ----------------------------------------------------
  return (
    <>
      {
        highLevelCategories.map(produceCategory =>
          <Group key={produceCategory.id}>
            <h1>{produceCategory.name}</h1>
            {
              getProduceCategories(produceCategory.id).map(category =>
                <div key={category.id}>
                  <h2>{category.name}</h2>
                  <Grid>
                    {getFilteredProducts(category.id).map(product => <Product key={product.variantId} product={product} />)}
                  </Grid>
                </div>)
            }
          </Group>)
      }
    </>
  );
};

// STYLING -----------------------------------
const Grid = styled.div`
  display: grid;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
  padding: 60px;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

const Group = styled.div`
  text-align: left;
  h1 {
    padding: none;
    border-bottom: thick double #32a1ce;
  }
  h2 {
    margin-left: 20px;
    border-bottom: thick double #9cd6ed;
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

// EXPORTS -----------------------------------
export default Products;
