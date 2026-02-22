import express from 'express';
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.route.js"
import messageRoute from "./Routes/message.route.js"
import path from "path";
import connectDB  from './db/db.js';
import cookieParser from "cookie-parser"

dotenv.config();

const app=express();

const __dirname=path.resolve();


const PORT=process.env.PORT || 3000

app.use(express.json())  //req.body
app.use(cookieParser())

app.use("/api/auth", authRoute)
app.use("/api/message", messageRoute)

//make ready for deployment 
if (process.env.NODE_ENV ==="production")
{
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("/{*splat}", (_, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
    });
}



app.listen(PORT,()=>{
    console.log("Server running on port:"+ PORT);connectDB()
})