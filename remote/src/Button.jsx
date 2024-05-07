import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [count, setCount] = useState(0);
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
