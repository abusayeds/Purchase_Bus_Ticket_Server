import { Router } from "express";
import { ticketsController } from "./ticket-controller";
import requestValidation from "../../app/middwares/validation-request";

import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";
import { TicketValidation } from "./ticket-validation";

const router = Router();

router.post(
  "/admin/ticket",
  auth(USER_ROLE.admin),
  requestValidation(TicketValidation.createTicketValidation),
  ticketsController.createTicket
);
router.put(
  "/admin/ticket/:id",
  auth(USER_ROLE.admin),
  ticketsController.updateTicket
);
router.delete(
  "/admin/ticket/:id",
  auth(USER_ROLE.admin),
  ticketsController.deleteTicket
);

router.get(
  "/tickets",
  auth(USER_ROLE.user),
  ticketsController.getAvailableTicket
);

// user Purchase a ticket for a specific bus and time.
router.get(
  "/tickets",
  auth(USER_ROLE.user),
  ticketsController.getAvailableTicket
);
router.post(
  "/tickets/purchas",
  auth(USER_ROLE.user),
  ticketsController.purchaseTicket
);
export const slotsRouts = router;
