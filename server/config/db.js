const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
      console.log("Db connected sucessfully!!")
    }
    catch(error){
      console.log("Error connecting to the database!!")
    }
  };


  module.exports = connectDb;
