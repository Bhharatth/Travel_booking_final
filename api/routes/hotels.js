import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  getHotelRooms,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
// router.post("/", createHotel);
router.post("/",verifyAdmin, createHotel);
//UPDATE

router.put("/:id", verifyAdmin, updateHotel);
//DELETE

router.delete("/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotel);

//GET HOTEL ROOMS
router.get("/room/:id", getHotelRooms);

//COUNT BY TYPE
router.get("/countByType", countByType)

//COUT BY CITY
router.get("/countByCity", countByCity)

export default router;
