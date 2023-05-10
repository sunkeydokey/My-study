'use client';

import { useState } from 'react';

const List = () => {
  let products = ['Tomatoes', 'Pasta', 'Coconut'];
  return (
    <div>
      <h4 className="title">상품 목록</h4>

      {products.map((product, idx) => {
        const [quantity, setQuantity] = useState(0);

        return (
          <div className="food" key={idx}>
            <img src={`/food${idx}.png`} alt={product} className="food-img" />
            <h4>{product} $40</h4>
            <span>{quantity}</span>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                setQuantity(quantity - 1);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
