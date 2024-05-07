import React, { useState } from "react";

const Button = () => {
  const [cout, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>{cout}</button>
    </div>
  );
};

export default Button;
