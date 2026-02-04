import express from 'express';
import dotenv from 'dotenv';
import authRoute from "./Routes/auth.route.js"
import path from "path";
import connectDB  from './db/db.js';

dotenv.config();

const app=express();

const __dirname=path.resolve();


const PORT=process.env.PORT || 3000

app.use(express.json())  //req.body

app.use("/api/auth", authRoute)

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