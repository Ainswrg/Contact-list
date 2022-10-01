import express from "express";
import jwt from "jsonwebtoken";

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
