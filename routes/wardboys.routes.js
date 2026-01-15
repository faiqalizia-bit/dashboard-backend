const express = require("express");
const router = express.Router();
const controller = require("../controllers/wardboys.controller");

router.get("/", controller.getWardBoys);
router.get("/:id", controller.getWardBoyById);
router.post("/", controller.createWardBoy);
router.put("/:id", controller.updateWardBoy);
router.delete("/:id", controller.deleteWardBoy);

module.exports = router;