import { ContenedorTarjetasSintetizador } from "./ContenedorTarjetasSintetizador.js";
import { listadoSintetizador } from "./listados/listadoSintetizadores.js";

console.log(`este ${listadoSintetizador}`);

const ContenedorTarjetasSintetizadores = new ContenedorTarjetasSintetizador("#contenedor-cartas") 

ContenedorTarjetasSintetizadores.agregarTarjetasALaAppCon(listadoSintetizador);

console.log(`este ${listadoSintetizador}`);




/** 
const sintetizador1 = new Sintetizador("Grandmother", 2018)
const sintetizador2 = new Sintetizador("Model D", 1970)
const sintetizador3 = new Sintetizador("Subsecuent37", 2014)


const tarjeta1 = new Tarjeta(sintetizador1.getModelo(),"imagenes/imagenesModelos/Moog Grandmother.jpg",sintetizador1.getAnioDeFabricacion())
const tarjeta2 = new Tarjeta(sintetizador2.getModelo(),"imagenes/imagenesModelos/Moog model d.jpg",sintetizador2.getAnioDeFabricacion())
const tarjeta3 = new Tarjeta(sintetizador3.getModelo(),"imagenes/imagenesModelos/Moog subsecuent 37.jpg",sintetizador3.getAnioDeFabricacion())


document.querySelector("#contenedor-cartas").innerHTML=`
    <div id="primeraFila" class= "row primera-fila-cartas">
        <div class ="col">
            ${tarjeta1.generarHtml()}
        </div>
        <div class ="col">
            ${tarjeta2.generarHtml()}
        </div>
        <div class ="col">
            ${tarjeta3.generarHtml()}
        </div>
    </div>
    

`
*/