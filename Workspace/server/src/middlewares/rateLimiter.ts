import rateLimit from "express-rate-limit";

export const globalLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20, // Limit each IP to 20 requests per `window` (here, per 1 minute)
  message: "Too many requests from this IP, please try again after a minute",
});
