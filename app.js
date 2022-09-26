import { Tarjeta } from "./tarjeta.js";

const grandMother = new Tarjeta("Grandmother","imagenes/imagenesModelos/Moog Grandmother.jpg")
const modelD = new Tarjeta("Model D","imagenes/imagenesModelos/Moog model d.jpg")
const subsecuent37 = new Tarjeta("Subsecuent 37","imagenes/imagenesModelos/Moog subsecuent 37.jpg")

document.querySelector("#contenedor-cartas").innerHTML=`
    <div id="primeraFila" class= "row primera-fila-cartas">
        <div class ="col">
            ${grandMother.getHtml()}
        </div>
        <div class ="col">
            ${modelD.getHtml()}
        </div>
        <div class ="col">
            ${subsecuent37.getHtml()}
        </div>
    </div>
    

`