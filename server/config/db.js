import mongoose from "mongoose";
import { MONGODB_URI } from "./app.js";

mongoose.connect(MONGODB_URI)
.then(()=> console.log('Database connected'))
.catch((err) => console.log(err))


export const db = mongoose.connection