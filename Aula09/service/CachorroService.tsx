import { Database } from "../database/Database"
import { Cachorro } from "../model/Cachorro"

export class CachorroService {
    static readonly TABLE = `cachorro`
    
    static async create(obj: Cachorro) {
        const result = await Database.runQuery(`
        INSERT INTO ${this.TABLE} (
            nome,
            raca,
            pelagem,
            datanasc) 
            VALUES (?,?,?,?)`, [
                obj.nome,             
                obj.raca,
                obj.pelagem,             
                obj.datanasc            
        ])
        console.log(result);
        obj.id = result;
        return obj
    }

    static async update(obj: Cachorro) {
        const query = `UPDATE ${this.TABLE} 
        set nome =? ,   
        raca =? ,  
        sexo =? ,  
        datanasc =?  
        WHERE id = ?;`
        const result = await Database.runQuery(query, [
            obj.nome,            
            obj.raca, 
            obj.pelagem,           
            obj.datanasc,            
            obj.id
        ])
        return result.rowsAffected > 0
    }

    static async delete(obj: Cachorro) {

        const query = `DELETE FROM ${this.TABLE} WHERE id = ?;`
        const result = await Database.runQuery(query, [obj.id])

        return result.rowsAffected > 0
    }

    static async tryRemoveImage(id: number) {
       
    }

    static async findById(id: number) {
        const query = `SELECT * FROM ${this.TABLE} WHERE id = ?;`
        const result = await Database.runQuery(query, [id])

        if (result.rows.length != 1) {
            throw new Error('Cachorro não existe')
        }

        const raw = result.rows.item(0)
        const obj = new Cachorro(raw)

        return obj
    }

    static async findAll() {
        const allRows = await Database.getAll();
        return allRows.map(row => new Cachorro(row))
    }
 

}