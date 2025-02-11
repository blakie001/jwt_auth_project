import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const resetPassword = async (req, res) => {

    try {
        const { email, username, newPassword } = req.body;
        
        const user = await User.findOne({ email, username });
        if (!user) {
            return res.status(400).json("Invalid Email or Username");
        }
    
        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();
    
        return res.status(200).json("Password reset successful. You can now log in with your new password.");
        
    } catch (error) {
        console.log(error);
        return res.status(500).json("Error Updating password");
    }

}