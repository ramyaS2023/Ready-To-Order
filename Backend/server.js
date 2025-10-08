import express from "express"
import cors from "cors"
import foodRouter from "./routers/foodRoute.js"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import userRouter from "./routers/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routers/cartRoute.js"
import orderRouter from "./routers/orderRoute.js"


dotenv.config()

// app config
const app = express()
const port = 4000



// middleware
app.use(express.json())
app.use(cors())


// DB Connection
await connectDB()

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/", (req, res)=>{
    res.send("API Working")
})


app.listen(port, async()=>{
    console.log(`Server Started on http://localhost:${port}`)
    // console.log(con);
})

// -----------------------------------------------------------------------------------
