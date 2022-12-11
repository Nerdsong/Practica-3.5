import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { TarjetaTazas } from "./TarjetaTazas.js";
import { Taza } from "./classesdeElementosBasicos/Tazas.js";

class ContenedorTarjetasTazas extends ContenedorTarjetas {
    
/**
 * 
 * @param {Taza} info para construit la tarjeta
 * @returns Tarjeta construida con la información.
 */
   crearTarjetaCon(info){
       return new TarjetaTazas(
            info.getModelo(),
            info.getColor(),
            info.getFoto())
        
}
}

export {ContenedorTarjetasTazas}