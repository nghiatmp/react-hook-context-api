import React from 'react';
import Product from '../Products'
import './styles.scss';

index.propTypes = {
  
};

function index(props) {
  console.log('home render');
  return (
      <div className="home-page">
        <h1>Home Page</h1>
        <Product />
      </div>
    
  );
}

export default index;