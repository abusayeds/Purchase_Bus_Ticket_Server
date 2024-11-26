import { z } from "zod";

const createBusValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    details: z.string(),
    color: z.string(),
    isDeleted: z.boolean().default(false),
  }),
});
const updateBusValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    details: z.string().optional(),
    color: z.string().optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});
export const busValidation = {
  createBusValidationSchema,
  updateBusValidationSchema,
};
