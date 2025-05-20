import { createElement } from "../dist/react/index.development.js";

export default function Counter() {
    return (
      createElement("article", null,
        createElement("h2", null, "Counter"),
        createElement("p", null, "Button pressed 1 times"),
        createElement("button", null, "Increment"),
      )
    );
}