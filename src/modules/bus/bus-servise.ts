/* eslint-disable @typescript-eslint/no-explicit-any */

import { TBus } from "./bus-interface";
import { BusModel } from "./bus-model";

const createBusDB = async (payload: TBus) => {
  const result = await BusModel.create(payload);
  return result;
};

const getSingleBusDB = async (id: any) => {
  const result = await BusModel.findById(id);
  return result;
};

const getAllBusDB = async () => {
  const result = await BusModel.find();

  return result;
};
const updateBusDB = async (id: string, payload: TBus) => {
  const result = await BusModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteBusDB = async (id: string) => {
  const result = await BusModel.findByIdAndDelete({ _id: id });
  return result;
};

export const BusServise = {
  createBusDB,
  getSingleBusDB,
  getAllBusDB,
  updateBusDB,
  deleteBusDB,
};
