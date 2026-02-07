import express from "express";
import { signup, login ,logout } from "../controller/auth.controllers.js";
import { log } from "console";


const router=express.Router();

router.post("/signup",signup);


router.post("/login", login )
router.post("/logout",logout)

export default router