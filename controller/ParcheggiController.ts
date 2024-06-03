import { Database } from "../model/Database";
import { Veicolo } from "../model/Veicolo";

export class ParcheggiController{
    private db:Database;
    constructor(){
        this.db= new Database;
    }

    getAll():Veicolo[]{

        return this.db.parchegggio.veicoli.filter(veicolo => veicolo.uscita == undefined);

    }

    getNumber():number{

        return this.getAll().length;
        
    }

}