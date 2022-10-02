import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.3ljbsrd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB Error", err));

const app = express();
const PORT = 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("OK");
});

app.post("/auth/login", (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "Vasya Pupkin",
    },
    "secret123"
  );

  res.json({
    success: true,
    token,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
