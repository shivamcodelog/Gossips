import express from "express";

const router=express.Router();

router.get("/signup", (req, res) => {
    res.send("Signup Endpoind");
});

router.get("/Home", (req, res) => {
    res.send("Home page")
})
router.get("/login", (req, res) => {
    res.send("login page")
})
router.get("/logout", (req, res) => {
    res.send("logout Endpoind")
})

export default router