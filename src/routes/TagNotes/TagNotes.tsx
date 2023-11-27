import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { useAppSelector } from "../../hooks/redux";
import { useParams } from "react-router-dom";
import { Note } from "../../types/notes";

function TagNotes() {
  const { name } = useParams() as { name: string };
  const { mainNotes } = useAppSelector((state) => state.notesList);
  let notes: Note[] = [];
  mainNotes.forEach((note) => {
    if (note.tags.find((tag) => tag.name === name)) {
      notes.push(note);
    }
  });
  console.log(notes);
  return <MainWrapper notes={notes} type={name} />;
}

export default TagNotes;
