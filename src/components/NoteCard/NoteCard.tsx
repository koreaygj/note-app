import { Note } from "../../types/notes";
import parse from "html-react-parser";
import {
  Card,
  ContentBox,
  FooterBox,
  TagsBox,
  TopBox,
} from "./NoteCard.styles";

import { TbPinned, TbPinnedFilled } from "react-icons/tb";
import { setPinnedNotes } from "../../store/noteList/noteListSlice";
import { useAppDispatch } from "../../hooks/redux";
import getNoteCardBtn from "../../utils/getNoteCardBtn/getNoteCardBtn";

interface curNote {
  note: Note;
  type: string;
}

function NoteCard({ note, type }: curNote) {
  const dispatch = useAppDispatch();
  const func = () => {
    const imgContent = note.content.includes("img");

    if (imgContent) {
      return note.content;
    } else {
      return note.content.length > 75
        ? note.content.slice(0, 75) + "..."
        : note.content;
    }
  };
  return (
    <Card style={{ backgroundColor: note.color }}>
      <TopBox>
        <div className="noteCard__title">
          {note.title.length > 10
            ? note.title.slice(0, 10) + "..."
            : note.title}
        </div>
        <div className="noteCard__top-options">
          <span className="noteCard__priority"> {note.priority}</span>
          {note.isPinned ? (
            <TbPinnedFilled
              className="noteCard__pin"
              onClick={() => dispatch(setPinnedNotes(note.id))}
            />
          ) : (
            <TbPinned
              className="noteCard__pin"
              onClick={() => dispatch(setPinnedNotes(note.id))}
            />
          )}
        </div>
      </TopBox>
      <ContentBox> {parse(func())}</ContentBox>
      <TagsBox>
        {note.tags.map((tag) => (
          <span>{tag.name}</span>
        ))}
      </TagsBox>
      <FooterBox>
        <span className="noteCard-date">{note.date}</span>
        {getNoteCardBtn(type, note, dispatch)}
      </FooterBox>
    </Card>
  );
}
export default NoteCard;
