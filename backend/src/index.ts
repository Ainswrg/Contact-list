import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import IndexRoute from "./routers/index";

mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.3ljbsrd.mongodb.net/contact?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB Error", err));

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/", IndexRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
