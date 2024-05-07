import React, { useState } from "react";
import "./Button.css";
import useCount from "./store";

const Button = () => {
  const [count, setCount] = useCount(0);
  return (
    <div>
      <button
        className="shared-btn"
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default Button;
