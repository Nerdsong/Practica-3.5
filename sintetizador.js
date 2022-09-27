class Sintetizador{
    #modelo = "modelo por defecto";
    #marca = "Moog";
    #anioDeFabricacion = "anio de fabricación del sinte";

    /**
     * 
     * @param {String} modelo 
     * @param {Number} anio 
     */
    constructor (modelo,anio){
        this.#modelo = modelo;
        this.#anioDeFabricacion = anio;
    }

    getModelo(){
        return this.#modelo;
    }

    getAnioDeFabricacion(){
        return this.#anioDeFabricacion;
    }
}


export {Sintetizador};