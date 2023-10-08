import React from "react";

const Cart = ({ cartItems }) => {
  // console.log(cartItems)
  return (
    <div className="cart-item">
      <div className="cart-item-header">Cart Items</div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items are added.</div>
      )}
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img
              className="cart-item-image"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              alt={item.title}
            />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-release">
              <strong>Release Date:</strong> {item.release_date}
            </p>
            <p>Price:{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
