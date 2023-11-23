import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { toggleTagsModal } from "../../store/modal/modalSlice";
import { useAppDispatch } from "../../hooks/redux";

function Sidebar() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={styles.sidebarContainer}>
      <h1>Keep</h1>
      <div className={styles.items} onClick={() => nav("/")}>
        <span className={styles.icon}>📝</span>
        <span className={styles.text}>Notes</span>
      </div>
      <div
        className={styles.items}
        onClick={() => dispatch(toggleTagsModal({ type: "edit", view: true }))}
      >
        <span className={styles.icon}>✏️</span>
        <span className={styles.text}>Edit Notes</span>
      </div>
      <div className={styles.items} onClick={() => nav("/archive")}>
        <span className={styles.icon}>📦</span>
        <span className={styles.text}>Archive</span>
      </div>
      <div className={styles.items}>
        <span className={styles.icon}>🗑️</span>
        <span className={styles.text}>Trash</span>
      </div>
    </div>
  );
}

export default Sidebar;
