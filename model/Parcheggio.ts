import {Veicolo} from "./Veicolo";

export class Parcheggio{
    nome:string;
    indirizzo:string;
    capienza:number;
    tariffaOraria:number;
    veicoli:Veicolo[] =[];

    constructor(nome:string,indirizzo:string,capienza:number,tariffaOraria:number){
        this.nome = nome;
        this.indirizzo = indirizzo;
        this.capienza = capienza;
        this.tariffaOraria = tariffaOraria;
    }
}
