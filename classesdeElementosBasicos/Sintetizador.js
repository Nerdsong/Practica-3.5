class Sintetizador{
    #modelo = "modelo por defecto";
    #marca = "Moog";
    #anioDeFabricacion = "anio de fabricación del sinte";
    #foto = ""

    /**
     * 
     * @param {String} modelo del sinte
     * @param {String} anio de fabriación
     * @param {String} foto del sinte 
     * @param {String} marca
     */
    constructor (modelo,anio,foto,marca){
        this.#modelo = modelo;
        this.#anioDeFabricacion = anio;
        this.#foto = foto;
        this.#marca = marca;
    }

    getModelo(){
        return this.#modelo;
    }

    getAnioDeFabricacion(){
        return this.#anioDeFabricacion;
    }

    getFotoDelSinte(){
        return this.#foto;
    }
}


export {Sintetizador};