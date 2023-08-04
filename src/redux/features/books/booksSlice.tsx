import { IBook } from "../../../types/globalTypes";
import { createSlice } from "@reduxjs/toolkit";

interface ICart {
  books: IBook[];
}

const initialState: ICart = {
  books: [],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
