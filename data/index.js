import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const albumIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Erik",
    lastName: "Valle",
  },
  {
    _id: userIds[1],
    firstName: "Fisk",
    lastName: "Burger",
  },
  {
    _id: userIds[2],
    firstName: "Taco",
    lastName: "Tuesday",
  },
  {
    _id: userIds[3],
    firstName: "Hello",
    lastName: "World",
  },
];

export const albums = [
  {
    userId: userIds[0],
    _id: albumIds[0],
    title: "outdoor",
  },
  {
    userId: userIds[1],
    _id: albumIds[1],
    title: "cats",
  },
  {
    userId: userIds[2],
    _id: albumIds[2],
    title: "sticks",
  },
  {
    userId: userIds[3],
    _id: albumIds[3],
    title: "chaos",
  },
];

export const photos = [
  {
    albumId: albumIds[0],
    _id: new mongoose.Types.ObjectId(),
    picturePath: "",
  },
  {
    albumId: albumIds[1],
    _id: new mongoose.Types.ObjectId(),
    picturePath: "",
  },
  {
    albumId: albumIds[2],
    _id: new mongoose.Types.ObjectId(),
    picturePath: "",
  },
  {
    albumId: albumIds[3],
    _id: new mongoose.Types.ObjectId(),
    picturePath: "",
  },
];
