import express from "express";
import http, { createServer } from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const mongoDBURI = process.env.MONGODB_URI as string;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () => {
  console.log("server running  on localhost 8080");
});

mongoose.Promise = Promise;
mongoose.connect(mongoDBURI);
mongoose.connection.on("error", (error: Error) => {
  console.log(error);
});

app.use("/", router());
