import { Marque } from './marque';
import { TypeChaussure } from './type-chaussure';

export class Chaussure {

    id: number;
    image: string;
    nom: string;
    marque: string;
    type: string;
    taille: number;
    dateEntree: Date;

    constructor(id: number = null, image: string = null, nom: string = null, marque: string = null, type: string = null, taille: number = null, dateEntree: Date = new Date() ) {
        this.id = id
        this.image = image
        this.nom = nom
        this.marque = marque
        this.type = type
        this.taille = taille
        this.dateEntree = dateEntree
    }
}
