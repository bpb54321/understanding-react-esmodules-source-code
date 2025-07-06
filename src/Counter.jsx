import { useReducer } from "../dist/react";

export default function Counter({ name }) {
  const [state, dispatch] = useReducer(() => {}, 0);
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>Button pressed 1 time</p>
      <button className="counter-button">Increment</button>
    </article>
  );
}
