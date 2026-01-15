const express = require("express");
const router = express.Router();
const controller = require("../controllers/departments.controller");

router.get("/", controller.getDepartments);
router.get("/:id", controller.getDepartmentById);
router.post("/", controller.createDepartment);
router.put("/:id", controller.updateDepartment);
router.delete("/:id", controller.deleteDepartment);

module.exports = router;