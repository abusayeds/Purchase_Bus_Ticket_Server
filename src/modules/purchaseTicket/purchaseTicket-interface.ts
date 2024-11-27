import { Types } from "mongoose";

export type TpurchaseTicket = {
  busId: Types.ObjectId;
  date: string;
  time: string;
};
