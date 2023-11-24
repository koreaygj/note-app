import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  viewEditTagsModal: boolean;
  viewAddTagsModal: boolean;
  viewAddNoteModal: boolean;
  viewFiltersModal: boolean;
}

const initialState: ModalState = {
  viewEditTagsModal: false,
  viewAddTagsModal: false,
  viewAddNoteModal: false,
  viewFiltersModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleTagsModal: (state, { payload }) => {
      const { type, view } = payload;
      console.log(payload);
      if (type === "add") {
        state.viewAddTagsModal = view;
      } else {
        state.viewEditTagsModal = view;
      }
    },
    toggleAddNoteModal: (state, action) => {
      console.log(action);
      state.viewAddNoteModal = action.payload;
    },
    toggleFiltersModal: (state, action) => {
      state.viewFiltersModal = action.payload;
    },
  },
});

export default modalSlice.reducer;
export const { toggleAddNoteModal, toggleFiltersModal, toggleTagsModal } =
  modalSlice.actions;
