import { createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../helpers/constants";
import axios from "axios";

export const getFlights = createAsyncThunk("flights/getFlight", async () => {
  // API isteği
  const res = await axios.request(options);
  // API ile gelen dizileri objeye çevirme
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));
  return newData;
});
