// src/index.js

import express from "express";
import userRouter from "./routes/users.routes";

const app = express();
app.use("/users", userRouter);

app.listen(3000);