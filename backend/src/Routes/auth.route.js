import express from "express";
import { signup } from "../controller/auth.controllers.js";


const router=express.Router();

router.post("/signup",signup);

router.get("/home", (req, res) => {
    res.send("Home page")
})
router.get("/login", (req, res) => {
    res.send("login page")
})
router.get("/logout", (req, res) => {
    res.send("logout Endpoind")
})

export default router