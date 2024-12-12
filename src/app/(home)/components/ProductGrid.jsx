// ProductGrid.jsx
"use client";
import React from "react";
import "../styles/productgrid.css";

import{ useState } from "react";
import Filters from "./Filters";
import Product from "./Product";

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const categories = ["Electronics", "Furniture", "Clothing"];
  const brands = ["Brand A", "Brand B", "Brand C"];
  const products = [
    {"id":1,"title":"cloth","price":109.95,"category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}},
    {"id":2,"title":"T-Shirt","price":22.3,"category":"men's clothing","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg","rating":{"rate":4.1,"count":259}},
    {"id":3,"title":"Jacket","price":55.99,"category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg","rating":{"rate":4.7,"count":500}},
    {"id":4,"title":"Casual","price":15.99,"category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg","rating":{"rate":2.1,"count":430}},
    {"id":5,"title":"Bracelate","price":695,"category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":4.6,"count":400}},
    {"id":6,"title":"GOLD","price":168,"category":"jewelery","image":"https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3.9,"count":70}},
    {"id":7,"title":"White Gold","price":9.99,"category":"jewelery","image":"https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":3,"count":400}},{"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}},
    {"id":9,"title":"USB ","price":64,"category":"electronics","image":"https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg","rating":{"rate":3.3,"count":203}},
    







    // Add more products here
  ];

  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory ? product.category === selectedCategory : true) &&
      (selectedBrand ? product.brand === selectedBrand : true) &&
      (product.price >= priceRange[0] && product.price <= priceRange[1])
    );
  });

  return (
    <>
    
    
    <div className="filter-body"> 
      <span>9 ITEMS</span>
    <button 
        className="toggle-sidebar-button" 
        onClick={() => setIsSidebarVisible(!isSidebarVisible)}
      >
        {isSidebarVisible ? "< HIDE FILTER" : "> SHOW FILTER"}
      </button>
      <select id="cars">
  <option value="RECOMENDED">RECOMENDED</option>
  <option value="NEWEST FIRST">NEWEST FIRST</option>
  <option value="POPULAR">POPULAR</option>
  <option value="HIGH TO LOW">PRICE : HIGH TO LOW</option>
  <option value="LOW TO HIGH">PRICE : LOW TO HIGH</option>
</select>
      

    </div>
    <hr/>
    <div className="product-page">
     

      {isSidebarVisible && (
        <div className="sidebar">
          <h4><input type="checkbox"/> CUSTOMIZABLE</h4><hr/>

         <Filters/>

         
        </div>
      )}

      <div className={`product-list ${isSidebarVisible ? "" : "full-width"}`}>
        
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={product.id} image={product.image} title={product.title} price={product.price} />
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
    </>
  );
};

export default ProductGrid;

