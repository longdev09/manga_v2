import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";
import { MangadexUtils } from "../../utils";

export const fetchChapterId = createAsyncThunk(
  "control/fetchChapterId",
  async (chapterId: string) => {
    try {
      const { data } = await MangadexApi.Chapter.getChapterId(
        {
          includes: [
            MangadexApi.Static.Includes.MANGA,
            MangadexApi.Static.Includes.SCANLATION_GROUP,
            MangadexApi.Static.Includes.USER,
          ],
        },
        chapterId
      );
      if (data) {
        return MangadexUtils.extendRelationship(
          data
        ) as MangadexTypes.ExtendChapter;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const control = createSlice({
  name: "control",
  initialState: {
    menu: true, // Giá trị khởi tạo mặc định
    mangaId: "" as string | null | undefined,
  },
  extraReducers: (buider) => {
    buider.addCase(fetchChapterId.fulfilled, (state, action) => {
      if (action.payload) state.mangaId = action.payload.manga?.id;
    });
  },
  reducers: {
    setMenu: (state) => {
      state.menu = !state.menu;
    },
  },
});

export const { setMenu } = control.actions;
export default control.reducer;
