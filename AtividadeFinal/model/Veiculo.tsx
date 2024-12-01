export class Veiculo{
    public id: number;
    public fabricante: string;
    public chassi: string;
    public modelo: string;
    public anoFabricacao: string;
    public kmRodados: number;
    public preco: number;
    public descricao: string;
    public imageUrl: string;

    constructor(obj?: Partial<Veiculo>){
        if(obj){
            this.id = obj.id;
            this.fabricante = obj.fabricante;
            this.chassi = obj.chassi;
            this.modelo = obj.modelo;
            this.anoFabricacao = obj.anoFabricacao;
            this.descricao = obj.descricao,
            this.kmRodados = obj.kmRodados,
            this.preco = obj.preco,
            this.imageUrl = obj.imageUrl
        }
    }

    toObjeto(){
        const veiculo = {
            id: this.id,
            fabricante: this.fabricante,
            chassi: this.chassi,
            modelo: this.modelo,
            anoFabricacao: this.anoFabricacao,
            kmRodados: this.kmRodados,
            preco: this.preco,
            descricao: this.descricao,
            imageUrl: this.imageUrl
        }
        return veiculo;
    }
    toString(){
        const atributos = Object.values(this).join('');
        return `Veiculo: [${atributos}]`
    }
}