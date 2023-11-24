import { FormEvent, useState } from "react";
import styles from "./AddNoteModal.module.css";
import {
  toggleAddNoteModal,
  toggleTagsModal,
} from "../../../store/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import TagModal from "../TagModal/TagModal";
import TextEditor from "../../TextEditor/TextEditor";
import { Note } from "../../../types/notes";
import { toast } from "react-toastify";
import { setMainNotes } from "../../../store/noteList/noteListSlice";

function AddNoteModal() {
  const { viewAddTagsModal } = useAppSelector((state) => state.modal);
  const { editNote } = useAppSelector((state) => state.notesList);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [updatedTags, setUpdatedTags] = useState(editNote?.tags || []);
  const [priority, setPriority] = useState("Low");

  const dispatch = useAppDispatch();

  const handleUpdateTag = (tag: string, type: string) => {
    const newTag = tag;
    if (type === "add") {
      setUpdatedTags((prev) => [...prev, { name: newTag, id: Date.now() }]);
    } else {
      setUpdatedTags(updatedTags.filter(({ name }) => name !== newTag));
    }
  };

  const date = Date.now().toString();

  const createNote = () => {
    if (!title) {
      toast.error("타이틀을 적어주세요.");
      return;
    } else if (content === "<p><br></p>") {
      toast.error("글을 작성해주세요.");
      return;
    }
    let note: Partial<Note> = {
      title: title,
      content: content,
      tags: updatedTags,
      color: backgroundColor,
      priority,
      editedTime: new Date().getTime(),
    };

    if (editNote) {
      note = { ...editNote, ...note };
    } else {
      note = {
        ...note,
        date,
        createdTime: new Date().getTime(),
        editedTime: null,
        isPinned: false,
        isRead: false,
        id: Date.now(),
      };
    }
    dispatch(setMainNotes(note));
    dispatch(toggleAddNoteModal(false));
  };

  return (
    <div className={styles.modalOverlay}>
      {viewAddTagsModal && (
        <TagModal
          type={"add"}
          updatedTags={updatedTags}
          handleUpdateTag={handleUpdateTag}
        />
      )}
      <div className={styles.modal}>
        <div>
          <div className={styles.modalHeader}>
            <h3>노트 생성하기</h3>
            <button onClick={() => dispatch(toggleAddNoteModal(false))}>
              &times;
            </button>
          </div>
          <div className={styles.modalBody}>
            <input
              type="text"
              placeholder="노트 제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextEditor
              color={backgroundColor}
              value={content}
              setValue={setContent}
            />
            <div className={styles.tagsContainer}>
              {updatedTags.map((tag) => (
                <span>{tag.name}</span>
              ))}
            </div>
            <div className={styles.noteProps}>
              <button
                onClick={() => {
                  dispatch(toggleTagsModal({ type: "add", view: true }));
                }}
                className={styles.tagBtn}
              >
                태그 추가
              </button>
              <div>
                <label>배경색 </label>
                <select
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                >
                  <option value="white">white</option>
                  <option value="tomato">red</option>
                  <option value="skyblue">blue</option>
                  <option value="sandybrown">yellow</option>
                </select>
              </div>
              <div>
                <label>우선순위 </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className={styles.modalFooter}>
            <button type="submit" onClick={createNote}>
              생성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNoteModal;
