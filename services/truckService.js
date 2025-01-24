// /services/truckService.js

import truckModel from '../models/truckModel.js';

const truckService = {
  createTruck: async (truckData) => {
    const { model, license_plate, year, operation_status } = truckData;

    const newTruck = await truckModel.create({ model, license_plate, year, operation_status });
    return newTruck;
  },

  getTrucks: async (search) => {
    const trucks = await truckModel.getAll(search);
    return trucks;
  },

  updateTruck: async (truckId, truckData) => {
    const { model, license_plate, year, operation_status } = truckData;

    const updatedTruck = await truckModel.update(truckId, { model, license_plate, year, operation_status });
    return updatedTruck;
  },

  deleteTruck: async (truckId) => {
    await truckModel.delete(truckId);
  }
};

export default truckService;
