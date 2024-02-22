import Impuestos from "./Impuestos";

class Cliente {
  constructor(nombre, impuesto = new Impuestos()) {
    this._nombre = nombre;
    this._impuesto = impuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(value) {
    this._nombre = value;
  }

  calcularImpuesto() {
    return (
      ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 21) / 100
    );
  }
}

export default Cliente;
