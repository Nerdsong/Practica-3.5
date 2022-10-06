class Sintetizador{
    #modelo = "modelo por defecto";
    #marca = "Moog";
    #anioDeFabricacion = "anio de fabricación del sinte";
    #foto = ""

    /**
     * 
     * @param {String} modelo del sinte
     * @param {Number} anio de fabriación
     * @param {String} foto del sinte 
     */
    constructor (modelo,anio,foto){
        this.#modelo = modelo;
        this.#anioDeFabricacion = anio;
        this.#foto = foto;
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