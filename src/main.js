import { createRoot } from "../dist/react-dom/client.js";
import { createElement } from "../dist/react/index.development.js";

function App() {
  console.log("App called");
  return createElement("h1", null, "Hello world!");
}

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(createElement(App));
