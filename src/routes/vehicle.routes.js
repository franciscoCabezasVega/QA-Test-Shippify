import { Router } from "express";
import { methods as vehicleController } from "../controllers/vehicle.controller";

const router = Router();

router.get("/:driver_id", vehicleController.getListVehiclesByDriver);
router.post("/", vehicleController.addVehicle);
router.delete("/:id", vehicleController.deleteVehicle);
router.put("/:id", vehicleController.updateVehicle);

export default router;