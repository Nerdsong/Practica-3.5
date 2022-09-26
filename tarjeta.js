class Tarjeta {
    #titulo = "titulo tarjeta";
    #imagen = "imagen tarjeta";
    #boton = "Comprar";

/**
 * 
 * @param {String} titulo de la tarjeta 
 * @param {String} imagen de la tarjeta
 */

    constructor (titulo,imagen){
        this.#titulo= titulo;
        this.#imagen= imagen;
    }


    getHtml(){
        return `<div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <img src="${this.#imagen}" class="card-img-top img-sintetizadores" alt="...">
                <div class="card-body">
                <h5 class="card-title texto-formato">${this.#titulo}</h5>
                <a href="#" class="btn btn-primary texto-formato-boton">${this.#boton}</a>
                </div>
                </div>`
    }
}

export {Tarjeta};