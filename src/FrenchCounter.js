import { createElement } from "../dist/react/index.development.js";

export default function FrenchCounter({ name }) {
    return (
      createElement("article", null,
        createElement("h2", null, "Compteur ", name),
        createElement("p", null, "Bouton appuyé 1 fois"),
        createElement("button", null, "Incrementer"),
      )
    );
}