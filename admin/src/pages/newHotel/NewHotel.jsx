import "./newHotel.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { hotelInputs } from "../../formSource";
import axios from "axios";

const NewHotel = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const { data, loading, error } = useFetch("/rooms");

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(info);

  const handleClick = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("files", files);
    data.append("upload_preset", "upload");
    console.log(data);

    try {
      const list = Promise.all(
        Object.values(files).map(async (file)=> {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dov1s6xnn/image/upload",
        data
      );
      const { url } = uploadRes.data;
      return url;
        })
      );

      const newHotel = {
        ...info,
        rooms,
        photos: list,
      };
      await axios.post("/hotels", newHotel);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e)=> {
    
    const selectedOptions = e.target.selectedOptions;
    const selectedIds = Array.from(selectedOptions).map((option) => option.value);
    setRooms(selectedIds)

  }
  console.log(rooms)

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>

              <div className="selectRooms">
                <label>Rooms</label>
                <select id="rooms" multiple onChange={handleSelect}>
                  {loading ? "loading.." : data && data.map((room)=> (
                    <option key={room._id} value={room._id}>{room.title}</option>
                  ))}
                  
                </select>
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHotel;
