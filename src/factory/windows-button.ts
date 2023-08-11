import { Button } from "./button";
import { WebDialog } from "./web-dialog";

// Los productos concretos proporcionan varias implementaciones
// de la interfaz de producto.
export class WindowsButton implements Button {
  onClick(callback: Function): void {
    console.log("WindowsButton.onClick cerrando el dialogo...");
    callback("WindowsButton.onClick");
  }
  render(): void {
    console.log("WindowsButton renderizado!");
  }
}
