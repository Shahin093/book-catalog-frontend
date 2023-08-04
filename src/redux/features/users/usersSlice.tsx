import { IUser } from "../../../types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  users: IUser[];
}

const initialState: ICart = {
  users: [],
};

const bookSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
