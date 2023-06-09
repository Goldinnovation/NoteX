import express from 'express'
import 'dotenv/config'
import {db} from './config/db.js'


const app =  express()
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server is on PORT ${PORT}`)
})
