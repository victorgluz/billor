// /controllers/truckController.js

import truckService from '../services/truckService.js';

const truckController = {
  createTruck: async (request, reply) => {
    try {
      const { model, license_plate, year, operation_status } = request.body;

      const newTruck = await truckService.createTruck({ model, license_plate, year, operation_status });

      return reply.status(201).send(newTruck);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  },

  getTrucks: async (request, reply) => {
    try {
      const search = request.query.search;
      const trucks = await truckService.getTrucks(search);

      return reply.send(trucks);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  },

  updateTruck: async (request, reply) => {
    try {
      const truckId = request.params.id;
      const { model, license_plate, year, operation_status } = request.body;

      const updatedTruck = await truckService.updateTruck(truckId, { model, license_plate, year, operation_status });

      return reply.status(200).send(updatedTruck);
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  },

  deleteTruck: async (request, reply) => {
    try {
      const truckId = request.params.id;

      await truckService.deleteTruck(truckId);

      return reply.status(204).send();
    } catch (error) {
      reply.status(400).send({ error: error.message });
    }
  }
};

export default truckController;
