import { useState } from "react";

export default function Team() {
  const [count, setCount] = useState(11);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleRemove = () => {
    setCount(count - 1);
  };

  const teamStyle = {
    border: "2px solid purple",
    padding: "10px",
    borderRadius: "10px",
    margin: "10px",
  };

  return (
    <div style={teamStyle}>
      <h2>Team: {count}</h2>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}
