// La interfaz de producto declara las operaciones que todos los
// productos concretos deben implementar.
export interface Button {
  onClick(callback: Function): void;
  render(): void;
}
