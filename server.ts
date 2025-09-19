import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

const PORT = process.env.PORT;
if (!PORT) {
  throw new Error("PORT environment variable is not set. Railway requires it.");
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/sidebarDB";

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error(err));
