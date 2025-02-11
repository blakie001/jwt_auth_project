import User from "../models/user.model.js";

export const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        if (!user) {
            return res.status(404).json("User Not Found");
        }

        return res.status(200).json(user);

    } catch (error) {
        console.log(error);
        res.status(500).json("Error Fetching User");
    }
};
