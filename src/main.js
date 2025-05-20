import { createRoot } from "../dist/react-dom/client.js";
import { createElement } from "../dist/react/index.development.js";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(createElement(App));

function App() {
  return createElement(
    "article",
    null,
    createElement("h2", null, "Counter"),
    createElement("p", null, "Button pressed 1 times"),
    createElement("button", null, "Increment"),
  );
}
