import React from "react";
import "./itemlist.css";

const ItemList = ({ items, remove, increase, decrease }) => {
  return (
    <div className="item-container">
      {items.length === 0 && (
        <p className="no-items">No items available</p>
      )}

      {items.map((item) => (
        <div key={item.id} className="item-card">
          <span className="item-text">
            {item.name} - ${item.price} × {item.quantity}
          </span>

          <div className="btn-group">
            <button className="qty-btn" onClick={() => decrease(item.id)} style={{padding:"7px 16px",fontSize:"25px"}}>-</button>
            <button className="qty-btn" onClick={() => increase(item.id)}>+</button>
            <button className="remove-btn" onClick={() => remove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
