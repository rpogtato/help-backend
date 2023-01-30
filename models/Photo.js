import { Schema, model } from "mongoose";

const PhotoSchema = new Schema({
  albumId: String,
  picturePath: String,
});

const Photo = model("Photo", PhotoSchema);
export default Photo;
