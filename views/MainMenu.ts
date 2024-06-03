import * as rl from 'readline-sync';
import { ParcheggiController } from '../controller/ParcheggiController';
export class MainMenu{
    static show(): void{
        let scelta: number;
        let controller= new ParcheggiController();

        console.log('GESTIONE PARCHEGGIO');
        console.log('-------------------');
        console.log('');
        console.log('1 - Elenco veicoli');
        console.log('');
        console.log('2 - Numero veicoli presenti');
        console.log('');
        console.log('9 - Esci');
        console.log('');
        

        scelta = rl.questionInt('Inserire la scelta: ');


        switch(scelta){
            case 1: {
                controller.getAll().forEach(veicolo => console.log(`${veicolo.targa} entrato  ${veicolo.ingresso}`));
                break;
            }
            case 2: {
                console.log('Sono presenti ' + controller.getNumber() + ' veicoli');
                break;
            }
            case 9: {
                console.log('Esci');
                break;
            }
            default: {
                console.log('Scelta non valida');
                break;
            }
        }
    }
}