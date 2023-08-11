import { WindowsButton } from "./factory/windows-button";
import { HTMLButton } from "./factory/html-button";
import { Dialog } from "./factory/dialog";
import { WindowsDialog } from "./factory/windows-dialog";
import { WebDialog } from "./factory/web-dialog";

// El código cliente funciona con una instancia de un
// creador concreto, aunque a través de su interfaz base.
// Siempre y cuando el cliente siga funcionando con el
// creador a través de la interfaz base, puedes pasarle
// cualquier subclase del creador.
function initialize(creator: Dialog) {
  // ...
  console.log("Cliente: No conozco la clase creadora pero esto funciona...");
  creator.render();
  // ...
}

// Si la plataforma es 'Windows'
console.log("App: Lanzado con WindowsDialog.");
initialize(new WindowsDialog());
console.log("");

// Si la plataforma es 'Web'
console.log("App: Lanzado con WebDialog.");
initialize(new WebDialog());
