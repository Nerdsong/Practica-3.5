import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { TarjetaSintetizador } from "./tarjetaSintetizador.js";
import { Sintetizador } from "./classesdeElementosBasicos/Sintetizador.js";

class ContenedorTarjetasSintetizador extends ContenedorTarjetas {
    
/**
 * 
 * @param {Sintetizador} info para construit la tarjeta
 * @returns Tarjeta construida con la información.
 */
   crearTarjetaCon(info){
       return new TarjetaSintetizador(
           info.getModelo(),
           info.getAnioDeFabricacion(),
           info.getFotoDelSinte())
        
}
}

export {ContenedorTarjetasSintetizador}