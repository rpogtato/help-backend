import Album from "../models/User.js";

/* READ */
export async function getUserAlbums(req, res) {
  try {
    const { userId } = req.params;
    const album = await Album.find({ userId });
    res.status(200).json(album);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

/* DELETE */
export async function deleteAlbum(req, res) {
  try {
  } catch (err) {}
}

/* CREATE */
export async function newAlbum(req, res) {
  try {
    const { userId } = req.params;
    const { title } = req.body;
    const newAlbum = new Album({ userId, title });
    const savedAlbum = await newAlbum.save();
    res.status(201).json(savedAlbum);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
