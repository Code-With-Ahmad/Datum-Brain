import React from 'react';
import '../CSS/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import DropDown from './DropDown';
import Cart from './Cart';

const Header = (props) => {
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    props.setSearchQuery(query);
    props.filterData(props.selectedCategory, query); 
  };

  return (
    <div className="header">
      <div className="container ">
        <div className="row d-flex text-center align-items-center l-s py-3 ">
          <div className=" col-lg-3 col-md-3 logo">
            <img src={require('../Images/logo.png')} alt="" />
          </div>
          <div className="col-lg-6 col-md-6 search-section d-flex justify-content-center align-items-center text-center">
            <div className="searchFields">
              <DropDown
                filterData={props.filterData}
                setSelectedCategory={props.setSelectedCategory}
                selectedCategory={props.selectedCategory}
              />
              <input
                type="text"
                placeholder='Search Here'
                onChange={handleSearchInputChange}
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='search_Icon' />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 cart">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;