import express from "express";
import { signup, login ,logout, updateProfile } from "../controller/auth.controllers.js";
import { log } from "console";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";


const router=express.Router();
router.use(arcjetProtection);

router.post("/signup",signup);
router.post("/login", login )
router.post("/logout",logout)
router.put("/updateprofile", protectRoute ,updateProfile)
// router.put("/changepassword", protectRoute , changePassword)
router.get("/check",protectRoute,(req,res)=>res.status(200).json(req.user))

export default router