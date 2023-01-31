import Photo from "../models/Photo.js";

export async function getAlbumPhotos(req, res) {
  try {
    const { albumId } = req.params;
    const photo = await Photo.find({ albumId });
    res.status(200).json(photo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function deletePhoto(req, res) {
  try {
  } catch (err) {}
}
