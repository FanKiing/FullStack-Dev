const mongoose = require('mongoose')

const employeSchema = new mongoose.Schema(
    {
        nom: {
            type: String,
            required: true,
            match: /^[A-Za-z\s]+$/
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },

        tel: {
            type: String,
            required: true,
            match: /^(\+212|0)([ \-_/]*)(5|6|7)([ \-_/]*)(\d[ \-_/]*){8}$/
        },

        salaire:{
            type:Number,
            required: true,
            min: 50000
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Employe", employeSchema);