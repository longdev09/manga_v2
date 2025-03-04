import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import control from "../slice/controlSlice";
import mangaSlice from "../slice/mangaSlice";
// nhận vào các reducer
export const store = configureStore({
  reducer: {
    mangaSlice: mangaSlice,
    control: control,
  },
});

// Tạo RootState từ store
export type RootState = ReturnType<typeof store.getState>;

//Tạo AppDispatch để dùng với useDispatch()
export type AppDispatch = typeof store.dispatch;

// Tạo hook tùy chỉnh để sử dụng với Redux
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<AppDispatch>();
