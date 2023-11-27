import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { useAppSelector } from "../../hooks/redux";

function TrashCan() {
  const { trashNotes } = useAppSelector((state) => state.notesList);
  return <MainWrapper notes={trashNotes} type={"trashNotes"} />;
}

export default TrashCan;
