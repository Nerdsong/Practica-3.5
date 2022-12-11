class Taza {
    #color = "color de la gorra";
    #marca = "Moog";
    #modelo = "ajustable";
    #foto = "";

/**
 * 
 * @param {String} color de la tazas
 * @param {String} modelo de la tazas 
 * @param {String} foto de la tazas 
 */  
constructor (color, modelo, foto){
    this.#color = color;
    this.#modelo = modelo;
    this.#foto = foto;
}

getModelo(){
    return this.#modelo;
}

getColor(){
    return this.#color;
}

getFoto(){
    return this.#foto;
}

}

export {Taza}