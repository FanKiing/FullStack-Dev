const Employe = require("../models/employeSchema");


// CREATE
const createEmploye = async (req, res) => {
    try {
        const employe = await Employe.create(req.body);

        res.status(201).json(employe);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// READ ALL
const getEmployes = async (req, res) => {
    try {
        const employes = await Employe.find();

        res.status(200).json(employes);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// READ ONE
const getEmployeById = async (req, res) => {
    try {
        const employe = await Employe.findById(req.params.id);

        if (!employe) {
            return res.status(404).json({
                message: "Employe not found"
            });
        }

        res.status(200).json(employe);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// UPDATE
const updateEmploye = async (req, res) => {
    try {

        const employe = await Employe.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!employe) {
            return res.status(404).json({
                message: "Employe not found"
            });
        }

        res.status(200).json(employe);

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


// DELETE
const deleteEmploye = async (req, res) => {
    try {

        const employe = await Employe.findByIdAndDelete(req.params.id);

        if (!employe) {
            return res.status(404).json({
                message: "Employe not found"
            });
        }

        res.status(200).json({
            message: "Employe deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


module.exports = {
    createEmploye,
    getEmployes,
    getEmployeById,
    updateEmploye,
    deleteEmploye
};