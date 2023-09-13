import React from 'react';

const DropDown = ({ filterData }) => {
  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    filterData(selectedCategory);
  };

  return (
    <div>
      <select id="category" onChange={handleSelectChange}>
        <option value="all">All</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
    </div>
  );
};

export default DropDown;