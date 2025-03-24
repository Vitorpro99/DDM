import * as Speech from "expo-speech";

export class Cachorro{
    public id: number;
    public nome: string;
    public raca: string;
    public pelagem: string;
    public datanasc: string;

    constructor(obj?: Partial<Cachorro>){
        if (obj){
            this.id     = obj.id
            this.nome   = obj.nome
            this.raca   = obj.raca
            this.pelagem = obj.pelagem
            this.datanasc= obj.datanasc
        }
    }

    toObjeto(){
        const cachorro = {
            id      : this.id,
            nome    : this.nome,
            raca    : this.raca,
            pelagem : this.pelagem,
            datanasc: this.datanasc
        }
        return cachorro;
    }

    toString(){
        const atributos = Object.values(this).join(',');
        return `Cachorro [${atributos}]`;

        // Cachorro[{id:1, nome:Pulga, raca:Vira Lata, ...}]
    }

    latir(){
        Speech.speak("Au au au au");
    }

}