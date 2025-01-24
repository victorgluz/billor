// /models/truckModel.js

import { sql } from '../config/db.js';

const truckModel = {
  create: async ({ model, license_plate, year, operation_status }) => {
    let result = await sql`
      INSERT INTO trucks (model, license_plate, year, operation_status) 
      VALUES (${model}, ${license_plate}, ${year}, ${operation_status});
    `
    return result
  },
  
  getAll: async (search) => {
    let result

    if (search) {
        result = await sql`SELECT * FROM trucks WHERE model ILIKE ${search}`
    }else{
        result = await sql`SELECT * FROM trucks`
    }
  
    return result
  },

  update: async (truckId, { model, license_plate, year, operation_status }) => {
    let result = await sql`
      UPDATE trucks 
      SET model = ${model}, license_plate = ${license_plate}, year = ${year}, operation_status = ${operation_status} 
      WHERE id = ${truckId};`

    return result
  },

  delete: async (truckId) => {
    let result = await sql`DELETE FROM trucks WHERE id = ${truckId}`;

    return result
  }
};

export default truckModel;
