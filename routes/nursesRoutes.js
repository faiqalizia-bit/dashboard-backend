const express = require("express");
const router = express.Router();
const controller = require("../controllers/nurses.controller");

router.get("/", controller.getNurses);
router.get("/:id", controller.getNurseById);
router.post("/", controller.createNurse);
router.put("/:id", controller.updateNurse);
router.delete("/:id", controller.deleteNurse);

module.exports = router;