import { Tarjeta } from "./tarjeta.js";

class ContenedorTarjetas{
    #idContenedor = "definir id";
    #tarjetas=[];

/**
 * 
 * @param {String} idContenedor en el documento html
 */

constructor(idContenedor){
    this.#idContenedor = idContenedor
}


/**
 * 
 * @param {Array} listaContenido 
 */
agregarTarjetasALaAppCon(listaContenido){ 
    this.agregarInfoALasTarjetas(listaContenido);
    this.mostrarTarjetas();
}

mostrarTarjetas(){
    document.querySelector(this.#idContenedor).innerHTML =`
            <div class="row">
                ${this.generadorTarjetasHtml()}
            </div>
        `;
}

generadorTarjetasHtml(){
    let tarjetasGeneradas = ``;

        for (let i = 0; i < this.#tarjetas.length; i++) {
            tarjetasGeneradas += `
                <div class="col" >
                    ${this.#tarjetas[i].generarHtml()}
                </div>
            `
        }
        return tarjetasGeneradas;
}



agregarInfoALasTarjetas(listaContenido){
    for(let i = 0 ; i < listaContenido.length; i++){
        this.#tarjetas.push(
            new Tarjeta(
                listaContenido[i].getModelo(),
                listaContenido[i].getAnioDeFabricacion(),
                listaContenido[i].getFotoDelSinte()
            )
        ); 
    }
}

}

export {ContenedorTarjetas};