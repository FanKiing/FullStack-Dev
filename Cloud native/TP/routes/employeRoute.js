const express = require("express");

const router = express.Router();

const {
    createEmploye,
    getEmployes,
    getEmployeById,
    updateEmploye,
    deleteEmploye
} = require("../controllers/employeController");

const authMiddleware = require("../middleware/authMiddleware");


// Protected Routes
router.post("/", authMiddleware, createEmploye);

router.get("/", authMiddleware, getEmployes);

router.get("/:id", authMiddleware, getEmployeById);

router.put("/:id", authMiddleware, updateEmploye);

router.delete("/:id", authMiddleware, deleteEmploye);


module.exports = router;