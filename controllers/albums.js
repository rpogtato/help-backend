import Album from "../models/User.js";

export async function getUserAlbums(req, res) {
  try {
    const { userId } = req.params;
    const album = await Album.find({ userId });
    res.status(200).json(album);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function deleteAlbum(req, res) {
  try {
  } catch (err) {}
}
