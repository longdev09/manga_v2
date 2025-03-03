//  call api manga dùng chung cho toàn bộ dự án, tránh gọi lại nhiều lần
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MangadexApi } from "../../api";
import { MangadexTypes } from "../../types";
import { MangadexUtils } from "../../utils";
import { RootState } from "../store";

/***********************
 *redux Thunk
 ***********************/

//  Cập nhật lại danh sách manga
export const updateManga = createAsyncThunk(
  "manga/updateManga",
  async (options: MangadexTypes.GetSearchMangaRequestOptions) => {
    if (options.ids?.length === 0) {
      return;
    }
    if (!options.includes) {
      options.includes = [MangadexApi.Static.Includes.COVER_ART];
    }

    if (!options.includes.includes(MangadexApi.Static.Includes.COVER_ART)) {
      options.includes.push(MangadexApi.Static.Includes.COVER_ART);
    }

    options.limit = 100;
    options.contentRating = [
      MangadexApi.Static.MangaContentRating.EROTICA,
      MangadexApi.Static.MangaContentRating.PORNOGRAPHIC,
      MangadexApi.Static.MangaContentRating.SAFE,
      MangadexApi.Static.MangaContentRating.SUGGESTIVE,
    ];

    //call api

    try {
      const { data } = await MangadexApi.Manga.getMangaList(options);
      if (data) {
        return data.map(
          (manga) =>
            MangadexUtils.extendRelationship(manga) as MangadexTypes.ExtendManga
        );
      }
    } catch (error) {
      throw error;
    }
  }
);

// cập nhật thống kê để lấy danh sách chung
export const updateStatistics = createAsyncThunk(
  "manga/updateStatistics",
  async (option: MangadexTypes.GetStatisticsRequestOptions, { getState }) => {
    const state = getState() as RootState;
    const statistics = state.mangaSlice.statistics;
    if (option.manga.length == 0) {
      return;
    }
    option.manga = [...new Set(option.manga.filter((id) => !statistics[id]))]; // lấy lại những id manga chưa có trong danh sách

    try {
      const data = await MangadexApi.Statistics.getStatistics(option);
      return data.statistics;
    } catch (error) {
      throw error;
    }
  }
);

/***********************
 *redux Slice
 ***********************/

export const mangaSlice = createSlice({
  name: "mangaSlice",
  initialState: {
    mangas: {} as Record<string, MangadexTypes.ExtendManga>,
    statistics: {} as Record<string, MangadexTypes.Statistics>,
  },
  extraReducers: (buider) => {
    buider.addCase(updateManga.fulfilled, (state, action) => {
      if (action.payload) {
        for (const m of action.payload) {
          const odlMangas = state.mangas[m.id]; // lay ra di lieu cu
          if (odlMangas) {
            state.mangas[m.id] = { ...odlMangas, ...m };
          } else {
            state.mangas[m.id] = m;
          }
        }
      }
    });
    buider.addCase(updateStatistics.fulfilled, (state, action) => {
      state.statistics = {
        ...state.statistics, // Giữ lại dữ liệu cũ
        ...action.payload, // Ghi đè những giá trị mới
      };
    });
  },

  reducers: {
    addMangas: (state, action: PayloadAction<MangadexTypes.ExtendManga[]>) => {
      if (action.payload) {
        for (const m of action.payload) {
          const odlMangas = state.mangas[m.id]; // lay ra di lieu cu
          if (odlMangas) {
            state.mangas[m.id] = { ...odlMangas, ...m };
          } else {
            state.mangas[m.id] = m;
          }
        }
      }
    },
  },
});

export const { addMangas } = mangaSlice.actions;
// Export reducer đúng cách
export default mangaSlice.reducer;
