import z from "zod";

const createTicketValidation = z.object({
  body: z.object({
    bus: z.string(),
    date: z.string(),
    time: z.string(),
    isBooked: z.string().default("available"),
  }),
});
const updateTicketValidation = z.object({
  body: z.object({
    bus: z.string().optional(),
    date: z.string().optional(),
    time: z.string().optional(),
    isBooked: z.string().default("available"),
  }),
});

export const TicketValidation = {
  createTicketValidation,
  updateTicketValidation,
};
