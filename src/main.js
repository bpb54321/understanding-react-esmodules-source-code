import { createRoot } from "../dist/react-dom/client.js";
import App from "./App.js";

const rootElement = document.getElementById("root");
const reactRoot = createRoot(rootElement);
const appElement = <App />;
reactRoot.render(appElement);
