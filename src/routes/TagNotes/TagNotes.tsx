import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { useAppSelector } from "../../hooks/redux";
import Header from "../../layout/Header/Header";
import { useParams } from "react-router-dom";
import { Note } from "../../types/notes";
import styles from "./TagNotes.module.css";

function TagNotes() {
  const { name } = useParams() as { name: string };
  const { mainNotes } = useAppSelector((state) => state.notesList);
  let notes: Note[] = [];
  mainNotes.forEach((note) => {
    if (note.tags.find((tag) => tag.name === name)) {
      notes.push(note);
    }
  });
  return (
    <div className={styles.container}>
      <Header />
      {notes.length === 0 ? (
        <div>노트가 없습니다.</div>
      ) : (
        <MainWrapper notes={notes} type={name} />
      )}
    </div>
  );
}

export default TagNotes;
