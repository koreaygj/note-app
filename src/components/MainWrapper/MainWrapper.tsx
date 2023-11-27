import Header from "../../layout/Header/Header";
import { Note } from "../../types/notes";
import NoteCard from "../NoteCard/NoteCard";
import { CardContainer, MainContainer } from "./MainWrapper.styles";

interface MainWrapperProps {
  notes: Note[];
  type: string;
}

function MainWrapper({ notes, type }: MainWrapperProps) {
  return (
    <MainContainer>
      <Header type={type} />
      <CardContainer>
        {notes.map((note) => (
          <div>
            <NoteCard note={note} type={type} key={note.id} />
          </div>
        ))}
      </CardContainer>
    </MainContainer>
  );
}

export default MainWrapper;
