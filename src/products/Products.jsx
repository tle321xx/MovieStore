import React from 'react';
import Card from '../components/Card';
import './Card.css';

const Products = ({movies, handleAddProduct}) => {
  return (
    <>
      <section className="card-container">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} handleAddProduct={handleAddProduct}/>
      ))}
    </section>
    </>
  );
}

export default Products;
