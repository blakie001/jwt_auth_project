import rateLimit from "express-rate-limit";


export const authLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: "You have Exceded the attempts Limit, Please try Again Later",
    headers: true
});