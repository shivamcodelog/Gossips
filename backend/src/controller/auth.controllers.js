import { generateToken } from "../../lib/utils.js";
import {User} from "../models/User.models.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!username || !email || !password) {
            return res.status(400).json({message:"All fields are required "})
        }

        if(password.length < 6){
            return res.status(400).json({message:"Password must be at least of 6 characters "})
        }

        const emailExists = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailExists.test(email)){
            return res.status(400).json({message:"Invalid email format"})
        }

        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Email already exist" });


        //Password Salting
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });


        if ( newUser){
            // generateToken(newUser._id,res)
            // await newUser.save();

            // Persist user first then issue auth cookie
            const savedUser = await newUser.save();
            generateToken(savedUser._id, res);

            res.status(201).json({
                _id:newUser._id,
                username:newUser.username,
                email:newUser.email,
                profilePic:newUser.profilePic
            })
        
        } else {
            res.status(400).json({
                message:"Invalid user data"
            })
        }

    } catch (error) {
        console.log("Error in signup controller:",error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}