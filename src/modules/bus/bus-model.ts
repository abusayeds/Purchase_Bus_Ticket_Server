import { model, Schema } from "mongoose";
import { TBus } from "./bus-interface";

const busSchema = new Schema<TBus>(
  {
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const BusModel = model<TBus>("Bus", busSchema);
