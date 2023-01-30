import { Schema, model } from "mongoose";

const AlbumSchema = new Schema({
  userId: String,
  title: String,
});

const Album = model("Album", AlbumSchema);
export default Album;
