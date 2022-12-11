import { ContenedorTarjetasTazas } from "./ContenedorTarjetasTazas.js";
import { listadoTazas } from "./listados/listadoTazas.js";

console.log(`este ${listadoTazas}`);

const ContenedorTarjetasTaza = new ContenedorTarjetasTazas("#contenedor-cartas") 

ContenedorTarjetasTaza.agregarTarjetasALaAppCon(listadoTazas);

console.log(`este ${listadoTazas}`);