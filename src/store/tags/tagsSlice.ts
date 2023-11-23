import { Tag } from "./../../types/tags";
import { createSlice } from "@reduxjs/toolkit";

interface TagsState {
  tags: Tag[];
}

const initialState: TagsState = {
  tags: [{ name: "test", id: 1 }],
};

const tagsSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addTags: (state, { payload }) => {
      state.tags.find(({ id }) => id === payload.id)
        ? state.tags.map((tag) => (tag.id === payload.id ? payload : tag))
        : state.tags.push(payload);
    },
    removeTags: (state, { payload }) => {
      state.tags = state.tags.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTags, removeTags } = tagsSlice.actions;
export default tagsSlice.reducer;
