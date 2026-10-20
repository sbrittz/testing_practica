/** Calcula el precio luego de aplicar un porcentaje de descuento. */
export function calcularPrecioFinal(precio: number, descuento: number): number {
  // Validamos los argumentos antes de calcular para evitar resultados fuera de las reglas del negocio.
  if (!Number.isFinite(precio) || precio < 0) {
    throw new RangeError("El precio debe ser finito y mayor o igual que cero");
  }

  if (!Number.isFinite(descuento) || descuento < 0 || descuento > 100) {
    throw new RangeError("El descuento debe ser finito y estar entre 0 y 100");
  }

  return precio - (precio * descuento) / 100;
}
