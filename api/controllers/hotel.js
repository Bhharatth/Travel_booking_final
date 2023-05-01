import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

//create
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

//update
export const updateHotel = async (req, es, next) => {
  try {
    const updatedHotel = await Hotel.finByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(err);
  }
};

//delete
export const deleteHotel = async (req, res, next) => {
  try {
    await Hotel.finByIdAndDelete(req.params.id);
  } catch (error) {
    res.status(500).json(error);
  }
};

//get Hotel
export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
};

//get Hotels
export const getAllHotel = async (req, res, next) => {
  const { min_price, max_price, ...others } = req.query;
  try {
    const query = {
      ...others,
      cheapestPrice: { $gte: min_price || 1, $lt: max_price || 999 },
    };
    const hotels = await Hotel.find(query).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
  }
};

//count by city
export const countByCity = async (req, res, next) => {

  const cities = req.query.cities.split(",");
  const countPromises = await cities.map((city) =>
    Hotel.countDocuments({ city: city })
  );

  try {
    const counts = await Promise.all(countPromises);

    res.status(200).json({counts});
  } catch (error) {
    next(error);
  }
};

//count by type
export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentsCount = await Hotel.countDocuments({ type: "apartment" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinsCount = await Hotel.countDocuments({ type: "cabin" });
    const resortsCount = await Hotel.countDocuments({ type: "resort" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentsCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinsCount },
      { type: "resort", count: resortsCount },
    ]);
  } catch (error) {
    next(error);
  }
};

//get all hotel rooms
export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    const roomList = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(roomList);
  } catch (error) {
    next(error);
  }
};
