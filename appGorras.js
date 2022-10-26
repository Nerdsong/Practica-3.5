import { ContenedorTarjetasGorras } from "./ContenedorTarjetasGorras.js";
import { listadoGorras } from "./listados/listadoGorras.js";

console.log(`este ${listadoGorras}`);

const ContenedorTarjetasGorra = new ContenedorTarjetasGorras("#contenedor-cartas") 

ContenedorTarjetasGorra.agregarTarjetasALaAppCon(listadoGorras);

console.log(`este ${listadoGorras}`);