/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { TicketModel } from "./ticket-model";
import { TTicket } from "./ticket-interface";

const createTicketDB = async (payload: TTicket) => {
  const result = await TicketModel.create(payload);
  return result;
};

const getAvailableTicketDB = async () => {
  const result = await TicketModel.find().populate("bus");
  return result;
};

const deleteTicketDB = async (id: any) => {
  const result = await TicketModel.findByIdAndDelete({ _id: id });
  return result;
};
const updateTicketDB = async (id: string, payload: TTicket) => {
  const booked = await TicketModel.findById({ _id: id });

  if (booked?.isBooked === "booked") {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "This Ticket is alredy booked ! "
    );
  }
  const result = await TicketModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const purchaseTicketDB = async (id: string, payload: TTicket) => {
  const booked = await TicketModel.findById({ _id: id });

  if (booked?.isBooked === "booked") {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "This Ticket is alredy booked ! "
    );
  }
  const result = await TicketModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

export const ticketServise = {
  createTicketDB,
  getAvailableTicketDB,
  deleteTicketDB,
  updateTicketDB,
  purchaseTicketDB,
};
