import { randomUUID } from "crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
    async list(search){
        let trucks

        if (search){
            trucks = await sql`select * from trucks WHERE model ilike ${"%"+search+"%"}`
        }else{
            trucks = await sql`select * from trucks`
        }
        
        return trucks
    }

    async create(truck){
        const { model, license_plate, year, operation_status } = truck

        await sql`INSERT INTO trucks (model, license_plate, year, operation_status) VALUES (${model}, ${license_plate}, ${year}, ${operation_status})`

    }

    async update(id, truck){
        const { model, license_plate, year, operation_status } = truck

        await sql`UPDATE trucks SET model = ${model}, license_plate = ${license_plate}, year = ${year}, operation_status = ${operation_status} WHERE id = ${id}`
    }

    async delete(id){
        await sql`DELETE FROM trucks WHERE id = ${id}`
    }
}