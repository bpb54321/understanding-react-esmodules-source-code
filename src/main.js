import { createRoot } from "../dist/react-dom/client.js";
import { createElement } from "../dist/react/index.development.js";
import App from './App.js';

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(createElement(App));
