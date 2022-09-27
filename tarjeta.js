class Tarjeta {
    #titulo = "titulo tarjeta";
    #imagen = "imagen tarjeta";
    #descripcion= "descripcion breve"
    #boton = "Comprar";

/**
 * 
 * @param {String} titulo de la tarjeta 
 * @param {String} imagen de la tarjeta
 * @param {String} descripcion de la tarjeta
 */

    constructor (titulo,imagen,descripcion){
        this.#titulo= titulo;
        this.#imagen= imagen;
        this.#descripcion = descripcion
    }


    getHtml(){
        return `<div class="card shadow p-3 mb-5 bg-white rounded" style="width: 18rem;">
                <img src="${this.#imagen}" class="card-img-top img-sintetizadores" alt="...">
                <div class="card-body">
                <h5 class="card-title texto-formato">${this.#titulo}</h5>
                <p class="card-text">Fabricado en ${this.#descripcion}</p>
                <a href="#" class="btn btn-primary texto-formato-boton">${this.#boton}</a>
                </div>
                </div>`
    }
}

export {Tarjeta};