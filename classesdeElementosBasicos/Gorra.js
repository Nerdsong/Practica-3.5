class Gorra {
    #color = "color de la gorra";
    #marca = "Moog";
    #modelo = "ajustable";
    #foto = "";

/**
 * 
 * @param {String} color de la gorra
 * @param {String} modelo de la gorra 
 * @param {String} foto de la gorra. 
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

export {Gorra}