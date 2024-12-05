import { Database } from "../database/Database"
import { Veiculo } from "../model/Veiculo"

export class VeiculoService {
    static readonly TABLE = `veiculo`
    
    static async create(obj: Veiculo) {
        const result = await Database.runQuery(`
        INSERT INTO ${this.TABLE} (
            fabricante,
            chassi,
            modelo,
            anoFabricacao,
            kmRodados,
            preco,
            descricao,
            imageUrl) 
            VALUES (?,?,?,?,?,?,?,?)`, [
                obj.fabricante,             
                obj.chassi,
                obj.modelo,             
                obj.anoFabricacao,
                obj.kmRodados,            
                obj.preco,
                obj.descricao,
                obj.imageUrl            
        ])
        console.log(result);
        obj.id = result;
        return obj
    }

    static async update(obj: Veiculo) {
        const query = `UPDATE ${this.TABLE} 
        set fabricante =? ,   
        chassi =? ,  
        modelo =? ,  
        anoFabricacao =?,
        kmRodados =?,  
        preco =?,  
        descricao =?,  
        imageUrl =?  
        WHERE id = ?;`
        const result = await Database.runQuery(query, [
            obj.fabricante,            
            obj.chassi, 
            obj.modelo,           
            obj.anoFabricacao,
            obj.kmRodados,         
            obj.preco,           
            obj.descricao,         
            obj.imageUrl,              
            obj.id
        ])
        return result.rowsAffected > 0
    }

    static async delete(id) {

        const query = `DELETE FROM ${this.TABLE} WHERE id = ?;`
        const result = await Database.runQuery(query, [id])

        return result.rowsAffected > 0
    }

    static async tryRemoveImage(id: number) {
       
    }

    static async findById(id: number) {
        const query = `SELECT * FROM ${this.TABLE} WHERE id = ?;`;
        const result = await Database.runQuery(query, [id]);
        console.log('Resultado da query findById:', result);
    
        if (!result || !result.rows || result.rows.length !== 1) {
            throw new Error('Veiculo não existe');
        }
    
        const raw = result.rows.item(0);
        const obj = new Veiculo(raw);
    
        return obj;
    }
    

    static async findAll() {
        const allRows = await Database.getAll();
        return allRows.map(row => new Veiculo(row))
    }
 

}