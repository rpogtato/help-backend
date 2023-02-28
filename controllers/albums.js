import Album from "../models/Album.js";

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
    const { id } = req.params;
    const album = await Album.findById(id);
    const deletedAlbum = await Album.deleteOne(album);
    if (deletedAlbum.deletedCount === 0) {
      return res.status(404).send({ message: "Album not found" });
    }
    res.status(200).json(deletedAlbum);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
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
