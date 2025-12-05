import React, { useState } from "react";
import ItemList from "./Item";
import Total from "./Total";
import "./shop.css";

const Shop = () => {
  const [items, setItems] = useState([]);

  const add = () => {
    const newitem = {
      id: Date.now(),
      name: `Item ${items.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      quantity: 1,
    };
    setItems([...items, newitem]);
  };

  const increase = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrease = (id) => {
    setItems(items.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const remove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className="shop-container">
      <h1 className="shop-title">Shopping</h1>

      <button className="add-btn" onClick={add}>Add item</button>

      <ItemList items={items} remove={remove} increase={increase} decrease={decrease} />

      <div className="total-box">
        <Total items={items} />
      </div>
    </div>
  );
};

export default Shop;
