import express from "express";
import { signup, login ,logout, updateProfile } from "../controller/auth.controllers.js";
import { log } from "console";
import { protectRoute } from "../middleware/auth.middleware.js";


const router=express.Router();

router.post("/signup",signup);
router.post("/login", login )
router.post("/logout",logout)
router.put("/updateprofile", protectRoute ,updateProfile)

export default router