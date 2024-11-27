import httpStatus from "http-status";
import appError from "../../app/middwares/appError";
import { TicketModel } from "../ticket/ticket-model";
import { TpurchaseTicket } from "./purchaseTicket-interface";
import { purchaseTicketModel } from "./purchaseTicket-model";

const purchaseTicketDB = async (payload: TpurchaseTicket) => {
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
  const ticket = await TicketModel.findOne({ bus: payload.busId }).populate(
    "bus"
  );
  if (!ticket) {
    throw new appError(httpStatus.BAD_REQUEST, "Bus not found ! ");
  }

  if (ticket?.isBooked === "booked") {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "This Ticket is alredy booked ! "
    );
  }
  if (ticket?.isBooked === "canceled") {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "This Ticket is alredy canceled ! "
    );
  }
  if (ticket?.date !== payload.date) {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "Not available this date. Select other date !"
    );
  }
  if (ticket?.time !== payload.time) {
    throw new appError(
      httpStatus.BAD_REQUEST,
      "Not available this Time. Select other Time !"
    );
  }
  const result = (await purchaseTicketModel.create(payload)).populate("busId");
  return result;
};
export const purchaseticketServise = {
  purchaseTicketDB,
};
