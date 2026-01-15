const express = require("express");
const router = express.Router();
const controller = require("../controllers/guards.controller");

router.get("/", controller.getGuards);
router.get("/:id", controller.getGuardById);
router.post("/", controller.createGuard);
router.put("/:id", controller.updateGuard);
router.delete("/:id", controller.deleteGuard);

module.exports = router;