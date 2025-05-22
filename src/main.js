import { createRoot } from "../dist/react-dom/client.js";
import { createElement } from "../dist/react/index.development.js";
import App, { state } from './App.js';

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(createElement(App));

window.toggleLanguageAndRender = function() {
    console.log("Toggle language and render...");
    state.currentLanguage = state.currentLanguage === "en" ? "fr" : "en";
    reactRoot.render(createElement(App));
}
