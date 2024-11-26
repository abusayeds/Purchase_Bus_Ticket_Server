import { Router } from "express";
import requestValidation from "../../app/middwares/validation-request";

import auth from "../../app/middwares/auth";
import { USER_ROLE } from "../user/user.constant";
import { busController } from "./bus-controller";
import { busValidation } from "./bus-validation";

const router = Router();
router.post(
  "/admin/bus",
  auth(USER_ROLE.admin),
  requestValidation(busValidation.createBusValidationSchema),
  busController.createBus
);
router.put(
  "/admin/bus/:id",
  auth(USER_ROLE.admin),
  requestValidation(busValidation.updateBusValidationSchema),
  busController.updateBus
);
router.get("/buses", auth(USER_ROLE.user), busController.getAllBus);
router.get("/bus/:id", busController.getsSingleBus);

router.delete("/admin/bus/:id", auth(USER_ROLE.admin), busController.deleteBus);

export const serviceRoutes = router;
