import React, { useState } from 'react';
import Header from './Header';
import Items from './Items';
import Products from '../items_list.json';
import '../CSS/Home.css';

const Home = () => {
  const [data, setData] = useState(Products);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filterData = (category, query) => {
    let filteredData = Products;

    
    if (category !== 'all') {
      filteredData = Products.filter((elm) => elm.category === category);
    }

   
    if (query) {
      filteredData = filteredData.filter((elm) =>
        elm.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    setData(filteredData);
  };

  return (
    <div>
      <Header
        filterData={filterData}
        setSearchQuery={setSearchQuery}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <div className="container">
        <div className="row mt-5 h-r ">
          <div className="col-12">
            <h2 className='results-heading'>Results</h2>
          </div>
        </div>
        <div className="row mt-2 i-c">
          {data.length === 0 ? (
            <div className="col-12">
              <p>No Results</p>
            </div>
          ) : (
            data.map((currElm) => (
              
                <div className="col-md-4 col-lg-3 p-3" key={currElm.id}>
                <Items
                  title={currElm.title}
                  price={currElm.price}
                  description={currElm.description}
                  category={currElm.category}
                  image={currElm.image}
                  rating={currElm.rating.rate}
                />
              </div>
              
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;