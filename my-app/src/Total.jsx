import React from "react";
import "./Total.css";

const Total = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="total-box">
      <h2 className="total-text">Total: ${total}</h2>
    </div>
  );
};

export default Total;
