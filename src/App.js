import { createElement } from "../dist/react/index.development.js";
import Counter from './Counter.js';

export default function App() {
    return (
      createElement('section', null, 
        createElement('h1', null, 'Counters'),
        createElement('section', null, 
          createElement(Counter, null)            
        )
      )
    );
}