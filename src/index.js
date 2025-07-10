import mongoose from "mongoose";
import connectDB from "./db/Connection.js";


connectDB();






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