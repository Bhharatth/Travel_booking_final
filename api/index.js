import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import hotelsRoute from "./routes/hotels.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import roomRoute from "./routes/rooms.js";

const app = express();
app.use(cors());
app.use(cookieParser())
dotenv.config();

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(console.log("Connected to mongoDB."));
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});


app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomRoute);
app.use("/api/users", usersRoute)

app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});
