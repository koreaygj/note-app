import AddNoteModal from "../../components/Modal/AddNoteModal/AddNoteModal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleAddNoteModal } from "../../store/modal/modalSlice";
import { CiSquarePlus } from "react-icons/ci";
import { HeaderContainer } from "./Header.style";

interface HeaderProp {
  type: string;
}

function Header({ type }: HeaderProp) {
  const dispatch = useAppDispatch();
  const { viewAddNoteModal } = useAppSelector((state) => state.modal);

  if (type === "/404") {
    return null;
  }
  return (
    <HeaderContainer>
      {viewAddNoteModal && <AddNoteModal />}
      <h1>{type === undefined ? "Home" : type.toUpperCase()}</h1>
      <CiSquarePlus
        className="add-note-btn"
        size="50"
        onClick={() => dispatch(toggleAddNoteModal(true))}
      />
    </HeaderContainer>
  );
}
export default Header;
