import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
// import { expressjwt as ejwt } from 'express-jwt'
import errorHandler from "./middlewares/errorHandler.js";
import userRouter from "./routes/userRouter.js";
import movieRouter from "./routes/movieRouter.js";
import mealRouter from "./routes/mealRouter.js";
import placeRouter from "./routes/placeRouter.js";
import eventRouter from "./routes/eventRouter.js";

//Variables .env
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
}))

//en caso de que querramos usar las cookies - se verá
app.use(cookieParser());

app.use("/api", userRouter, eventRouter, movieRouter, mealRouter, placeRouter);

//middleware después de los endpoints, por ende en el catch{next(err)} == el error pasa y entra a errorHandler
//esto lo había subido gabi a github
app.use(errorHandler);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});
