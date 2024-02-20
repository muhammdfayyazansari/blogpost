const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 5000;
const app = express();
const connectDB = require("./config/db");
const router = require("./api/users/userRouter");
app.use(cors());
app.use(express.json());


// mongoose.connect(MONGODB_URL).then((a)=>{console.log("mongodb connection successfull >>>" )})
// .catch((e)=>console.log("error in db connection => " ,e))
connectDB("blogpost");
app.use("/api", require('./rootRoute'));
// app.use("/", (req,res)=>{
//   res.status(200).send({
//     requestRecieved : true
//   })
// })
// app.use("/connection", (req,res)=>{
//   res.status(200).send({
//     requestRecieved : true
//   })
// })


app.listen(PORT , ()=>{
  console.log( `blogpost app is running on PORT NO => ${PORT}`)
})