import { useAppSelector } from "../../hooks/redux";
import MainWrapper from "../../components/MainWrapper/MainWrapper";
function Home() {
  const { mainNotes } = useAppSelector((state) => state.notesList);
  return <MainWrapper notes={mainNotes} type="mainNotes" />;
}

export default Home;
