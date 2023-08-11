import { Button } from "./button";
import { WindowsDialog } from "./windows-dialog";

// Los productos concretos proporcionan varias implementaciones
// de la interfaz de producto.
export class HTMLButton implements Button {
  onClick(callback: Function): void {
    console.log("HTMLButton.onClick cerrando el dialogo...");
    callback("HTMLButton.onClick");
  }
  render(): void {
    console.log("HTMLButton renderizado!");
  }
}
