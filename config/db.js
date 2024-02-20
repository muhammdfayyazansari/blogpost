require("dotenv").config();
// console.log("enc username",process.env.MONGODB_USERNAME)
// console.log("enc username",process.env.MONGODB_PASSWORD)


// mongodb+srv://fayyazansari268:M1KHTGqSclem8JpA@cluster0.atdiiyh.mongodb.net/?retryWrites=true&w=majority
// const MONGODB_URL = "mongodb+srv://fayyazansari268:M1KHTGqSclem8JpA@cluster0.atdiiyh.mongodb.net/";
// const MONGODB_URL = "mongodb+srv://fayyazansari268:M1KHTGqSclem8JpA@cluster0.atdiiyh.mongodb.net/?retryWrites=true&w=majority";
// const MONGODB_URL = `mongodb+srv://userfayyaz:dbfayyaz@cluster0.hfdzu25.mongodb.net/TodosWithAuth?retryWrites=true&w=majority`
const mongoose = require('mongoose');

const connectDB = async (dbName) => {
  try {
const MONGODB_URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.atdiiyh.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    await mongoose.connect(MONGODB_URL);
    console.log(`MongoDB connected to database '${dbName}'`);
  } catch (error) {
    console.error(`Error connecting to MongoDB '${dbName}':`, error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;


// module.exports = MONGODB_URL;
