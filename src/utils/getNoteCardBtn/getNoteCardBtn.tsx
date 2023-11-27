import { Dispatch } from "@reduxjs/toolkit";
import {
  moveNoteToArchive,
  moveNoteToTrash,
  removeNotes,
  setEditNote,
} from "../../store/noteList/noteListSlice";
import { toggleAddNoteModal } from "../../store/modal/modalSlice";
import { Note } from "../../types/notes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faBan,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NoteCardTools } from "./getNoteCardBtn.styles";

const getNoteCardBtn = (type: string, note: Note, dispatch: Dispatch) => {
  const handleEdit = () => {
    dispatch(toggleAddNoteModal(true));
    dispatch(setEditNote(note));
  };
  const handleArchive = () => {
    dispatch(moveNoteToArchive(note));
  };
  const handleTrash = () => {
    dispatch(moveNoteToTrash({ curNote: note, type: type }));
  };
  const handleRemove = () => {
    dispatch(removeNotes({ curNote: note }));
  };
  return (
    <NoteCardTools>
      <button onClick={handleEdit}>
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button onClick={handleArchive}>
        <FontAwesomeIcon icon={faArchive} />
      </button>
      {type === "trashNotes" ? (
        <button onClick={handleRemove}>
          <FontAwesomeIcon icon={faBan} />
        </button>
      ) : (
        <button onClick={handleTrash}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      )}
    </NoteCardTools>
  );
};

export default getNoteCardBtn;
