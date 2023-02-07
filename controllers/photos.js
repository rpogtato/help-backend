import Photo from "../models/Photo.js";

/* CREATE */
export async function newPhoto(req, res) {
  try {
    const { albumId } = req.params;
    const { picturePath } = req.body;
    const newPhoto = new Photo({ albumId, picturePath });
    const savedPhoto = await newPhoto.save();
    res.status(201).json(savedPhoto);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/* READ */
export async function getAlbumPhotos(req, res) {
  try {
    const { albumId } = req.params;
    const photo = await Photo.find({ albumId });
    res.status(200).json(photo);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

/* PATCH */

/* DELETE */
export async function deletePhoto(req, res) {
  try {
  } catch (err) {}
}
