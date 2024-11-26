import { Router } from "express";
import { userRoutes } from "../modules/user/user-routes";
import { serviceRoutes } from "../modules/bus/bus-routes";
import { slotsRouts } from "../modules/ticket/ticket-routes";

const router = Router();
router.use("/", userRoutes);
router.use("/", serviceRoutes);
router.use("/", slotsRouts);

export default router;
