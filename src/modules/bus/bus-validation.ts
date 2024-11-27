import { z } from "zod";

const createBusValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    details: z.string(),
    color: z.string(),
    status: z.string().default("available"),
  }),
});
const updateBusValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    details: z.string().optional(),
    color: z.string().optional(),
    status: z.string().default("available").optional(),
  }),
});
export const busValidation = {
  createBusValidationSchema,
  updateBusValidationSchema,
};
