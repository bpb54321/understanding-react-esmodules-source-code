import { createRoot } from "../dist/react-dom/client.js";
import App, { state } from './App.jsx';

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
reactRoot.render(<App />);

window.toggleLanguageAndRender = function() {
    console.log("Toggle language and render...");
    state.currentLanguage = state.currentLanguage === "en" ? "fr" : "en";
    reactRoot.render(<App />);
}
