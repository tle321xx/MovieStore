import React, { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Nav";
import Products from "../products/Products";
import { useMovies } from "../useMovie/useMovie";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";

const MyRoutes = ({cartItems, handleAddProduct}) => {
  const { movies, loading, movieTitles, price } = useMovies();

  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              movies={filteredMovies}
              loading={loading}
              movieTitles={movieTitles}
              price={price}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
      </Routes>
    </div>
  );
};

export default MyRoutes;
