import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import bookReducer from "./features/books/booksSlice";
import toastReducer from "./features/toasts/toastsSlice";
const store = configureStore({
  reducer: {
    books: bookReducer,
    toasts: toastReducer,
    // product: productReducer,
    // user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
