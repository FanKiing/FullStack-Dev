const express = require("express");

const dotenv = require("dotenv");

const connectDB = require("./config/db");


dotenv.config();


connectDB();

const app = express();


app.use(express.json());


app.use("/api/auth", require("./routes/authRoute"));

app.use("/api/employes", require("./routes/employeRoute"));


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});