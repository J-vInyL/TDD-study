import express from "express";
import productRoutes from "./routes.js";
import mongoose from "mongoose";

const PORT = 6000;

const app = express();
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://tdd:junseop96*@cluster0.uuvs3gl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log("DB error", err));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("HELLO");
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

app.listen(PORT);
console.log(`Running Port ${PORT}`);

export { app };
