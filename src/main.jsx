import { createRoot } from "../packages/react-dom/client.js";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
const appElement = <App />;
reactRoot.render(appElement);
