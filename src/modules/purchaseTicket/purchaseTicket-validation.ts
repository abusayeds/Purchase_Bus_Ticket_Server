import z from "zod";

const createPurchaseTicketValidation = z.object({
  body: z.object({
    busId: z.string(),
    date: z.string(),
    time: z.string(),
  }),
});

export const purchaseTicketValidation = {
  createPurchaseTicketValidation,
};
