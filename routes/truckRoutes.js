// /routes/truckRoutes.js

import truckController from '../controllers/truckController.js';

export default async function truckRoutes(fastify, options) {
  fastify.post('/api/trucks', truckController.createTruck);
  fastify.get('/api/trucks', truckController.getTrucks);
  fastify.put('/api/trucks/:id', truckController.updateTruck);
  fastify.delete('/api/trucks/:id', truckController.deleteTruck);
}
