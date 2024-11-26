import { Types } from "mongoose";

export type TTicket = {
  bus: Types.ObjectId;
  date: string;
  time: string;
  isBooked: "available" | "booked" | "canceled";
};
