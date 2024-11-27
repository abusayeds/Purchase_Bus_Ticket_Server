import { Router } from "express";
import { userRoutes } from "../modules/user/user-routes";
import { serviceRoutes } from "../modules/bus/bus-routes";
import { ticketRouts } from "../modules/ticket/ticket-routes";
import { purchaseTicketRouts } from "../modules/purchaseTicket/purchaseTicket-route";

const router = Router();
router.use("/", userRoutes);
router.use("/", serviceRoutes);
router.use("/", ticketRouts);
router.use("/", purchaseTicketRouts);

export default router;
