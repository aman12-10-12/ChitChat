import mongoose from "mongoose";

export const  connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("MongoDB connected"));
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI?.substring(0, 50) + "...");
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}
