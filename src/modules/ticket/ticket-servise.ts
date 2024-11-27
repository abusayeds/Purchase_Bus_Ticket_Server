/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { TicketModel } from "./ticket-model";
import { TTicket } from "./ticket-interface";
import { BusModel } from "../bus/bus-model";

const createTicketDB = async (payload: TTicket) => {
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const timeRegex = /^([01]?[0-9]|2[0-3]):([0-5][0-9])$/;
  if (!dateRegex.test(payload.date)) {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "Invalid date format. Please use dd/mm/yyyy."
    );
  }
  if (!timeRegex.test(payload.time)) {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "Invalid time format. Please use hh:mm (24-hour format)."
    );
  }
  const ticket = await BusModel.findById({ _id: payload.bus });
  if (ticket?.status === "booked") {
    throw new appError(httpStatus.BAD_REQUEST, "This bus is alredy booked ! ");
  }
  if (ticket?.status === "canceled") {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "This bus is alredy canceled ! "
    );
  }
  const result = await TicketModel.create(payload);
  return result;
};

const getAvailableTicketDB = async () => {
  const result = await TicketModel.find({ isBooked: "available" }).populate(
    "bus"
  );
  return result;
};

const deleteTicketDB = async (id: any) => {
  const result = await TicketModel.findByIdAndDelete({ _id: id });
  return result;
};
const updateTicketDB = async (id: string, payload: TTicket) => {
  const booked = await TicketModel.findById({ _id: id });

  if (booked?.isBooked === "booked") {
    throw new appError(httpStatus.BAD_REQUEST, " valid message  ");
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
};
