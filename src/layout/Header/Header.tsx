import { useLocation } from "react-router-dom";
import AddNoteModal from "../../components/Modal/AddNoteModal/AddNoteModal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toggleAddNoteModal } from "../../store/modal/modalSlice";

function Header() {
  const { viewAddNoteModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  if (pathname === "/404") {
    return null;
  }
  return (
    <div>
      <h1>{pathname.slice(1) === "" ? "Home" : pathname.slice(1)}</h1>
      <button onClick={() => dispatch(toggleAddNoteModal(true))}>
        새로운 노트
      </button>
      {viewAddNoteModal && <AddNoteModal />}
    </div>
  );
}
export default Header;
