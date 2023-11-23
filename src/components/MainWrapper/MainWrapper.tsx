import { Note } from "../../types/notes";

interface MainWrapperProps {
  notes: Note[];
  type: string;
}

function MainWrapper({ notes, type }: MainWrapperProps) {
  return (
    <div>
      <div></div>
      <div>{type}</div>
    </div>
  );
}

export default MainWrapper;
