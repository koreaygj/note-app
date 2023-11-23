import { toast } from "react-toastify";
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
      if (state.tags.find(({ name }) => name === payload.name)) {
        state.tags = state.tags.map((tag) =>
          tag.name === payload.name ? payload : tag
        );
        toast.warning("이미 존재하는 태그입니다.");
      } else {
        state.tags.push(payload);
        toast.info("태그가 등록되었습니다.");
      }
    },
    removeTags: (state, { payload }) => {
      state.tags = state.tags.filter(({ id }) => id !== payload.id);
    },
  },
});

export const { addTags, removeTags } = tagsSlice.actions;
export default tagsSlice.reducer;
