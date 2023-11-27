import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/notes";
import { toast } from "react-toastify";

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
      toast.info("노트가 저장되었습니다");
    },

    setPinnedNotes: (state, { payload }) => {
      state.mainNotes = state.mainNotes.map((note) =>
        note.id === payload ? { ...note, isPinned: !note.isPinned } : note
      );
    },

    setEditNote: (state, { payload }) => {
      state.editNote = payload;
    },

    moveNoteToArchive: (state, { payload }) => {
      if (!state.archiveNotes.find((note) => payload.id === note.id)) {
        state.archiveNotes.push(payload);
        state.mainNotes = state.mainNotes.filter(
          (note) => note.id !== payload.id
        );
      }
    },

    moveNoteToTrash: (state, { payload }) => {
      const { type, curNote } = payload;
      if (type === noteType.archiveNotes) {
        state.trashNotes.push(curNote);
        state.archiveNotes = state.archiveNotes.filter(
          (note) => note.id !== curNote.id
        );
      } else {
        state.trashNotes.push(curNote);
        state.mainNotes = state.mainNotes.filter(
          (note) => note.id !== curNote.id
        );
      }
    },

    removeNotes: (state, { payload }) => {
      state.trashNotes = state.trashNotes.filter(
        (note) => note.id !== payload.curNote.id
      );
    },
  },
});

export const {
  setMainNotes,
  setPinnedNotes,
  setEditNote,
  moveNoteToArchive,
  moveNoteToTrash,
  removeNotes,
} = noteListSlice.actions;
export default noteListSlice.reducer;
