// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { fileURLToPath } from "url";
// import path from "path";
// import { connectDB } from "./Database/lib.js";
// import cookieParser from "cookie-parser";
// import authRoutes from "./Routes/auth.route.js";
// import postRoutes from "./Routes/post.route.js"
// import commentRoutes from "./Routes/comment.route.js"

// dotenv.config();

// const app = express();

// app.use(cors({
//     origin: "http://localhost:5173",
//     credentials: true
// }));

// app.use(express.json());
// app.use(cookieParser());

// app.use("/uploads", express.static("uploads")); // Serve uploaded images

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);

// app.get("/" , (req,res) => res.send("welcome to my app"))


// // Connect to DB and Start Server
// const PORT = process.env.PORT || 5000;


//     app.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });


// export default app;

import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Simple test endpoint
app.get("/", (req, res) => {
  console.log("GET / endpoint hit"); // check your console
  res.send("Welcome to my app!");
});

// Another test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "This is a test endpoint" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
