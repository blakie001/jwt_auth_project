import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../config/jwt.config.js"


export const signup = async(req, res) =>{

    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json("Please Enter Complete Fields");
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json("Email already exists");
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
    
        await newUser.save();
    
        return res.status(200).json("User Created Successfully");
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error Registering User");
    }
}

export const login = async(req, res) =>{
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json("Please Enter Complete Fields");
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json("Invalid credentials");
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = await generateToken(user?._id.toString());

        return res.status(200).json({
            message: "Login Successfull",
            token: token,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json("Error Login User");
    }
}