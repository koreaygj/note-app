import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/notes";

interface NoteState {
  mainNotes: Note[];
  archiveNotes: Note[];
  trashNotes: Note[];
  editNote: null | Note;
}

const initialState: NoteState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNote: null,
};

enum noteType {
  mainNotes = "mainNotes",
  archiveNotes = "archiveNotes",
  trashNotes = "trashNotes",
}

const noteListSlice = createSlice({
  name: "noteLists",
  initialState,
  reducers: {
    setMainNotes: (state, { payload }) => {
      state.mainNotes.find(({ id }) => id === payload.id)
        ? state.mainNotes.map((note) =>
            note.id === payload.id ? payload : note
          )
        : state.mainNotes.push(payload);
    },
  },
});

export const {} = noteListSlice.actions;
export default noteListSlice.reducer;
