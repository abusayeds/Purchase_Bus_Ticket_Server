import { Schema, model } from "mongoose";
import { TTicket } from "./ticket-interface";

const ticketSchema = new Schema<TTicket>(
  {
    bus: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    isBooked: { type: String, default: "available", required: true },
  },
  { timestamps: true }
);

export const TicketModel = model<TTicket>("Ticket", ticketSchema);
