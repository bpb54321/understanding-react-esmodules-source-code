export default function Counter({ name }) {
  return (
    <article>
      <h2>Counter {name}</h2>
      <p>Button pressed 1 time</p>
      <button className="counter-button">Increment</button>
    </article>
  );
}