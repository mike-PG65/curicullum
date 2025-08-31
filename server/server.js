const express = require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv")

const app= express();
const PORT= 4050

dotenv.config()

app.use(express.json());



const runServer = async () => {
    await connectDb()
	app.listen(PORT, () => {
            console.log(`App is listening on Port 4050 ${PORT}`)
        });


};

runServer()

const educationRoutes = require("./education/education")
const experienceRoutes = require("./experience/experience")


app.use("/api/education", educationRoutes);
app.use("/api/experience", experienceRoutes);



