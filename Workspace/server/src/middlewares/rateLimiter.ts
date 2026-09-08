import rateLimit from "express-rate-limit";

export const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 50, // Limit each IP to 50 requests per 1 minute
  message: "Too many requests, please try again later",
});
