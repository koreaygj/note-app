import { useParams } from "react-router-dom";
import AddNoteModal from "../../components/Modal/AddNoteModal/AddNoteModal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleAddNoteModal } from "../../store/modal/modalSlice";

function Header() {
  const { viewAddNoteModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const { name } = useParams() as { name: string };
  if (name === "/404") {
    return null;
  }
  return (
    <div>
      <h1>{name === undefined ? "Home" : name}</h1>
      <button onClick={() => dispatch(toggleAddNoteModal(true))}>
        새로운 노트
      </button>
      {viewAddNoteModal && <AddNoteModal />}
    </div>
  );
}
export default Header;
