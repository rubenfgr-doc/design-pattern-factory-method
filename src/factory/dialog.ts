import { Button } from "./button";

// La clase creadora declara el método fábrica que debe devolver
// un objeto de una clase de producto. Normalmente, las
// subclases de la creadora proporcionan la implementación de
// este método.
export abstract class Dialog {
  // La creadora también puede proporcionar cierta
  // implementación por defecto del método fábrica.
  public abstract createButton(): Button;

  // Observa que, a pesar de su nombre, la principal
  // responsabilidad de la creadora no es crear productos.
  // Normalmente contiene cierta lógica de negocio que depende
  // de los objetos de producto devueltos por el método
  // fábrica. Las subclases pueden cambiar indirectamente esa
  // lógica de negocio sobrescribiendo el método fábrica y
  // devolviendo desde él un tipo diferente de producto.
  public render(): void {
    // Invoca el método fábrica para crear un objeto de
    // producto.
    const button = this.createButton();
    // Ahora, usa el producto
    console.log("Dialog: renderizando...");

    button.render();

    button.onClick((concreteButton: string) =>
      console.log("Dialog > " + concreteButton + " > dialogo cerrado!")
    );
  }
}
