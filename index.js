import express from "express";
import bodyParser from "body-parser";
import { connect, set } from "mongoose";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import userRoutes from "./routes/users.js";
import albumRoutes from "./routes/albums.js";
import photosRoutes from "./routes/photos.js";
import dotnev from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
import Album from "./models/Album.js";
import Photo from "./models/Photo.js";
import { users, albums, photos } from "./data/index.js";

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
app.use("/albums", albumRoutes);
app.use("/photos", photosRoutes);

/* MONGOOSE SETUP */
set("strictQuery", false);
const PORT = process.env.PORT || 6001;
connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Album.insertMany(albums);
    // Photo.insertMany(photos);
  })
  .catch((err) => console.log(`${err} did not connect`));
