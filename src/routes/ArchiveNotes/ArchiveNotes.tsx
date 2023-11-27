import MainWrapper from "../../components/MainWrapper/MainWrapper";
import { useAppSelector } from "../../hooks/redux";

function ArchiveNotes() {
  const { archiveNotes } = useAppSelector((state) => state.notesList);
  return <MainWrapper notes={archiveNotes} type="archiveNotes" />;
}

export default ArchiveNotes;
