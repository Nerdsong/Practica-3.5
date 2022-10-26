import { ContenedorTarjetas } from "./ContenedorTarjetas.js";
import { TarjetaGorra} from  "./TarjetaGorras.js";
import { Gorra } from "./classesdeElementosBasicos/Gorra.js";

class ContenedorTarjetasGorras extends ContenedorTarjetas {
    
/**
 * 
 * @param {Gorra} info para construit la tarjeta
 * @returns Tarjeta construida con la información.
 */
   crearTarjetaCon(info){
       return new TarjetaGorra(
           info.getModelo(),
           info.getColor(),
           info.getFoto())
        
}
}

export {ContenedorTarjetasGorras}