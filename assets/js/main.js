//importamos
import Cliente from "./Cliente.js";
import Impuestos from "./Impuestos.js";

// se crea el objeto deimpuesto
let impuestosDeGabriel = new Impuestos(1545000, 355000);

// objeto de cliente
let gabriel = new Cliente("Gabriel", impuestosDeGabriel);

// nombre  cliente
gabriel.nombre = "Gabriel";

// se calcula el impyesto
let impuestoDeGabriel = gabriel.calcularImpuesto();

console.log(`El impuesto anual de ${gabriel.nombre} es de ${impuestoDeGabriel}`);