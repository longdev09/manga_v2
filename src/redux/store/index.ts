import { configureStore } from "@reduxjs/toolkit";
import mangaSlice from "../slice/mangaSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// nhận vào các reducer
export const store = configureStore({
  reducer: {
    mangaSlice: mangaSlice,
  },
});

// Tạo RootState từ store
export type RootState = ReturnType<typeof store.getState>;

//Tạo AppDispatch để dùng với useDispatch()
export type AppDispatch = typeof store.dispatch;

// Tạo hook tùy chỉnh để sử dụng với Redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
