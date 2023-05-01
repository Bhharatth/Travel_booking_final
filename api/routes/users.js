import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkoutuser/:id", verifyToken, (req, res, next) => {
  res.send("hello user ");
});

router.get("/checkoutadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello user ");
});
//update user
router.put("/:id", verifyUser, updateUser);
//delete user
router.delete("/:id", verifyUser, deleteUser);
//get user
router.get("/:id", verifyUser, getUser);
//get all user
router.get("/", verifyAdmin, getAllUser);

export default router;
