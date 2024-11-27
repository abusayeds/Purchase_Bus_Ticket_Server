import { Router } from "express";

import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";
import { purchaseTicketsController } from "./purchaseTicket-controller";
import requestValidation from "../../app/middwares/validation-request";
import { purchaseTicketValidation } from "./purchaseTicket-validation";

const router = Router();

router.post(
  "/tickets/purchas",
  auth(USER_ROLE.user),
  requestValidation(purchaseTicketValidation.createPurchaseTicketValidation),
  purchaseTicketsController.purchaseTicket
);
export const purchaseTicketRouts = router;
