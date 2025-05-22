import { createElement } from "../dist/react/index.development.js";
import Counter from './Counter.js';
import FrenchCounter from "./FrenchCounter.js";

export const state = {
  currentLanguage: "en"
};

export default function App() {
    return (
      createElement('section', null, 
        createElement('h1', null, 'Counters'),
        createElement('section', null, 
          state.currentLanguage === "en" ?
            createElement(Counter, { name: "One" }) :
            createElement(FrenchCounter, { name: "Un" }),           
        )
      )
    );
}