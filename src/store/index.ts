import { configureStore } from "@reduxjs/toolkit";
import noteListSlice from "./noteList/noteListSlice";
import menuSlice from "./menu/menuSlice";
import tagsSlice from "./tags/tagsSlice";
import modalSlice from "./modal/modalSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice,
    notesList: noteListSlice,
    tags: tagsSlice,
    modal: modalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
