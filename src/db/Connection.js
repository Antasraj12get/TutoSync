import express from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv';
dotenv.config({
    path:"./.env"
}); // Load env vars


import { Db_name } from "../Constants.js"

const connectDB = async () => {
    try {
        const connectionInsance = await mongoose.connect(`${process.env.MONGODB_URL}/ ${Db_name}`)
        console.log("MongoDb Connected :", connectionInsance.connection.host)
    } catch (err) {
        console.log("error", err);
        process.exit();
        // throw err;
    }
}

export default connectDB;