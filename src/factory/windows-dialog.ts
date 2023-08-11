import { Button } from "./button";
import { Dialog } from "./dialog";
import { WindowsButton } from "./windows-button";

// Los creadores concretos sobrescriben el método fábrica para
// cambiar el tipo de producto resultante.
export class WindowsDialog extends Dialog {
  public createButton(): Button {
    return new WindowsButton();
  }
}
