import express from "express";
import bodyParser from "body-parser";
import { connect, set } from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/users.js";
import dotnev from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

/* CONFIGURATIONS */

const app = express();
dotnev.config();
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

/* ROUTES */
app.use("/users", userRoutes);

/* MONGOOSE SETUP */
set("strictQuery", false);
const PORT = process.env.PORT || 6001;
connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
