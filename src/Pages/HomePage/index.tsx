import React from "react";
import Products from "../../component/Products";
import Header from "../../component/Header";
import SearchBar from "../../component/SearchBar";

const HomePage = () => {
  return (

    <div>
        <h1><SearchBar/></h1>
    <Products />
    </div>
  );

};  

export default HomePage;