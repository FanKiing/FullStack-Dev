const express = require("express");

const router = express.Router();

const {
    createEmploye,
    getEmployes,
    getEmployeById,
    updateEmploye,
    deleteEmploye
} = require("../controllers/employeController");


// CRUD Routes

router.post("/", createEmploye);

router.get("/", getEmployes);

router.get("/:id", getEmployeById);

router.put("/:id", updateEmploye);

router.delete("/:id", deleteEmploye);


module.exports = router;