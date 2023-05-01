import User from "../models/User.js";

//update user
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.finByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(err);
  }
};

//delete
export const deleteUser = async (req, res, next) => {
  try {
    await User.finByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(500).json(user);
  } catch (error) {
    next(error);
  }
};

//get all user
export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
