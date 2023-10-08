import React, { useState } from "react";
// import "./Card.css";
import { BsFillBagHeartFill } from 'react-icons/bs';

const Card = ({ movie,handleAddProduct }) => {
  const { title, poster_path, release_date, price } = movie;
  return (
    
    <div className="card-container">
    <div>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="card-img"
        />
        <h2 className="card-title">{title}</h2>
        <p className="card-release">
          <strong>Release Date:</strong> {release_date}
        </p>
        
        <div className="bag-icon">
        Price: {price} <hr />
        <button className="card-add-button" onClick={() => handleAddProduct(movie)}>
        add to cart: <BsFillBagHeartFill /> 
        </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;