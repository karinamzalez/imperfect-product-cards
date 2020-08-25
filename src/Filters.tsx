// IMPORTS -----------------------------------
/* libraries */
import React from 'react';
import styled from 'styled-components';
import { InputLabel, FormControl, MenuItem, Select } from "@material-ui/core";
/* types */
import { CategoryName } from './types';

interface FilterProps {
  selectedFilter: any,
  handleSelect: React.Dispatch<React.SetStateAction<any>>
}

// LOCAL VARS--------------------------
  const filters: CategoryName[] = [
    "All Products" ,"Fruit" ,"Vegetables" ,
    "Beverages" ,"Breakfast" ,"Bakery" ,
    "Oils, Condiments, Spices and Spreads" ,
    "Soups/Stocks" ,"Dried Pantry Staples" ,
    "Prepared Foods & Kits" ,"Canned/Pickled Foods" ,
    "Salty Snacks" ,"Sweet Snacks" ,"Bars" ,"Baking"
  ]

// COMPONENT -----------------------------------
const Filters: React.FC<FilterProps> = ({ selectedFilter, handleSelect }) => {
  function handleFilterSelect(
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>) {
    // invoke the callback with the new value
    handleSelect(e.target.value);
  }

  return (
    <Row>
      <FormControl variant="outlined">
        <InputLabel>Filter</InputLabel>
        <Select
          value={selectedFilter}
          onChange={(e) => handleFilterSelect(e)}
          label="Filter"
        >
          {
            filters.map(filter => 
              <MenuItem value={filter} key={filter}>{filter}</MenuItem>
            )
          }
        </Select>
      </FormControl>
    </Row>
  );
};

// STYLING -----------------------------------
const Row = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

// EXPORTS -----------------------------------
export default Filters;
