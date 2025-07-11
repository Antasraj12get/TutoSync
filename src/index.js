import mongoose from "mongoose";
import connectDB from "./db/Connection.js";
import express from "express";

const app = express();


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server is running on PORT:", process.env.PORT)
        })
    })
    .catch((err) => {
        console.log("Mongo Db connection is Failed", err)
    })






/*

import {Db_name} from  "./Constants.js"
import express from "express";
import dotenv from "dotenv"

const app = express();

dotenv.config(); // Load env vars



; (async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${Db_name}`)
        app.on("error", (err)=>{
            console.log("Errors", err)
            throw err;
        })

        app.listen(process.env.PORT, ()=>{
            console.log("Server is Running on PORT :", process.env.PORT)
        })
    } catch (error) {
        console.log("Error is :" , error)
        throw error;
    }
})()

*/