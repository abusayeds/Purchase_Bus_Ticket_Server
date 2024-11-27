import { Schema, model } from "mongoose";
import { TpurchaseTicket } from "./purchaseTicket-interface";

const purchaseTicketSchema = new Schema<TpurchaseTicket>(
  {
    busId: { type: Schema.Types.ObjectId, ref: "Bus", required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

export const purchaseTicketModel = model<TpurchaseTicket>(
  "purchaseTicket",
  purchaseTicketSchema
);
