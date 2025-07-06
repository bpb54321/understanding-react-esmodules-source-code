import { createRoot } from "../dist/react-dom/client.js";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
console.log(reactRoot);
reactRoot.render(<App />);
