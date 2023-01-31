import User from "../models/User.js";

/* READ */

export async function getUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function getAllUsers(req, res) {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

export async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    const deletedUser = await User.deleteOne(user);
    if (deletedUser.deletedCount === 0) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).json(deletedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
