import { useState } from "react";

function Link() {
  return <a href="https://jser.dev">jser.dev</a>;
}

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    <div>
      <div style={{marginBottom: "1rem"}}>
        <Link />
      </div>
      <button onClick={handleClick}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}
