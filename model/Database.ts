import { Parcheggio } from "./Parcheggio";
import { Veicolo } from "./Veicolo";
export class Database {
    parchegggio:Parcheggio;

    constructor() {
        this.parchegggio = new Parcheggio("Reggio Emilia FS","Via della stazione, Reggio Emilia",123,2);
        this.parchegggio.veicoli.push(new Veicolo("AA000AA"));
        this.parchegggio.veicoli.push(new Veicolo("BB000BB"));
    };

}