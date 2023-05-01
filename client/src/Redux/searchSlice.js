import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    destination: "",
    date: [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ],
    options: {},
    location: "",
  },
  reducers: {
    SET_SEARCH: (state, action) => {
      state.destination = action.payload.destination;
      state.date = action.payload.date;
      state.options = action.payload.options;
      state.location = action.payload.location;
    },
    RESET_SEARCH: (state, action) => {
      return {
        // ...state,
        destination: "",
        date: [
          {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
          },
        ],
        options: {},
        location: "",
      };
    },
  },
});

export const { SET_SEARCH, RESET_SEARCH } = searchSlice.actions;
export default searchSlice.reducer;
