import mongoose from "mongoose";
import color from 'colors'
import { exit } from 'node:process';

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(color.magenta.bold(`MongoDB Conectado  en: ${url}`))
        
    } catch (error) {
        // console.log(error.message)
        console.log(color.red.bold('Error al conectar a MongoDB'))
        exit(1)
    }
}