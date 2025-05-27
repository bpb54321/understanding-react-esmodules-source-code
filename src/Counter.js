import { createElement } from "../dist/react/index.development.js";

export default function Counter({ name }) {
  return (
    createElement("article", null,
      createElement("h2", null, "Counter ", name),
      createElement("p", null, "Button pressed 1 times"),
      createElement("button", {className: "counter-button"}, "Increment"),
    )
  );
}