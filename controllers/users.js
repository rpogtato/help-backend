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

/* DELETE */

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

/* CREATE */

export async function register(req, res) {
  try {
    const { firstName, lastName } = req.body;
    const newUser = new User({ firstName, lastName });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

/* UPDATE */

export async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const { firstName, lastName } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName: firstName,
          lastName: lastName,
        },
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
