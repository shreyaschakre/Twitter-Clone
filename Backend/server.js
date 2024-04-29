import dotenv from 'dotenv'
import express from 'express'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js'

dotenv.config()

const app = express()
const PORT = process.env.POST || 5000

app.use("/api/auth",authRoutes)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    connectToMongoDB()
} )