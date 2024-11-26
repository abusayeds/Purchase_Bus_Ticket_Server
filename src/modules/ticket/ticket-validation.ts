import z from "zod";

const createTicketValidation = z.object({
  body: z.object({
    bus: z.string(),
    date: z.string(),
    time: z.string(),
    isBooked: z.string().default("available"),
  }),
});

export const TicketValidation = {
  createTicketValidation,
};
