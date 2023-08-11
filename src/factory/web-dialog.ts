import { Button } from "./button";
import { Dialog } from "./dialog";
import { HTMLButton } from "./html-button";

// Los creadores concretos sobrescriben el método fábrica para
// cambiar el tipo de producto resultante.
export class WebDialog extends Dialog {
  public createButton(): Button {
    return new HTMLButton();
  }
}
