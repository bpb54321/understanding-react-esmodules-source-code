import Counter from './Counter.jsx';
import FrenchCounter from "./FrenchCounter.jsx";

export const state = {
  currentLanguage: "en"
};

export default function App() {
  return (
    <section>
      <h1>Counters</h1>
      <section>
        {state.currentLanguage === "en" ? (
          <Counter name="One" />
        ) : (
          <FrenchCounter name="Un" />
        )}
      </section>
    </section>
  );
}