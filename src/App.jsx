import React, { useState } from "react";
// import Navigation from "./Navigation/Nav";
import Products from "./products/Products";
// import { useMovies } from "./useMovie/useMovie";
import MyRoutes from "./routes/MyRoutes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const handleAddProduct = (product) => {
    alert("Movie added")
    const productIndex = cartItems.findIndex((item) => item.title === product.title);
    if (productIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  // console.log(cartItems)

  // const { movies, loading, movieTitles, price } = useMovies();

  // const [query, setQuery] = useState("");

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <div>
      {/* <Navigation query={query} handleInputChange={handleInputChange} /> */}
      <Router>
        <MyRoutes cartItems={cartItems} handleAddProduct={handleAddProduct} />
      </Router>
      {/* <Products
        movies={filteredMovies}
        loading={loading}
        movieTitles={movieTitles}
        price={price}
      /> */}
    </div>
  );
};

export default App;
