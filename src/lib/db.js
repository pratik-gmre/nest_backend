

import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()


const URL = process.env.DATABASE_URL
if (URL == undefined) {
    throw new Error("DATABASE_URL is not defined");
}

export const connectToDb  = async()=>{
    try {

        const connection   = await mongoose.connect(URL);
        console.log(`Database connected `);
    } catch (error) {
        console.log(error);
    }
}