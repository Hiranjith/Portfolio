import jwt from "jsonwebtoken"
import Admin from "../models/userModel.js"
import { assyncHandler } from "../middleware/assyncHandlerMW.js"
import bcrypt from "bcryptjs"
import generateToken from "../utils/createoken.js"

export const createAdmin = assyncHandler(async(req, res)=> {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            throw new Error("All fields are required");
        }

        const existingAdmin = await Admin.findOne({email})
        if(existingAdmin){
            return res.status(400).json({success : false, message : "User already exists"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newAdmin = await Admin.create({name, email, password : hashedPassword})

        const token = await generateToken(res, newAdmin._id)

        res.status(200).json({
            success: true,
            id : newAdmin._id,
            name : newAdmin.name,
            email : newAdmin.email,
            password : newAdmin.password,
            token
        })
        
    } catch (error) {
        console.error("Error creating admin:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const loginAdmin = assyncHandler(async(req, res) => {
    try {
        const {email, password} = req.body
        const existingUser = await Admin.findOne({email})
        console.log('hi');
        
        console.log(existingUser);
        
        if(existingUser){
            const validPassword = await bcrypt.compare(password, existingUser.password)
            console.log(validPassword);
            
            if(validPassword){
                const token = await generateToken(res, existingUser._id.toString())
                return res.status(200).json({
                    success: true,
                    message : "Logged in successfully",
                    id : existingUser._id,
                    username : existingUser.name,
                    email : existingUser.email,
                    token
                })
            }
        }

        throw new Error("Invalid credentials, login failed");
        
    } catch (error) {
        console.error("Error logging in:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

export const logoutAdmin = assyncHandler(async(req, res) => {
    try {

        console.log(req.cookies);
        
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        })
        res.status(200).json("Logged out successfully")
    } catch (error) {
        console.error("Error creating admin:", error.message);
        res.status(400).json({ success: false, error: error.message });
    }
})

