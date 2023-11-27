import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { toggleTagsModal } from "../../store/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

function Sidebar() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { tags } = useAppSelector((state) => state.tags);
  console.log(tags);
  return (
    <div className={styles.sidebarContainer}>
      <h1>Keep</h1>
      <div className={styles.items} onClick={() => nav("/")}>
        <span className={styles.icon}>📝</span>
        <span className={styles.text}>Notes</span>
      </div>
      {tags.map((tag) => (
        <div
          key={tag.id}
          className={styles.items}
          onClick={() => nav(`/tags/${tag.name}`)}
        >
          <span className={styles.icon}>🔩</span>
          <span className={styles.text}>{tag.name}</span>
        </div>
      ))}
      <div
        className={styles.items}
        onClick={() => dispatch(toggleTagsModal({ type: "edit", view: true }))}
      >
        <span className={styles.icon}>✏️</span>
        <span className={styles.text}>Edit Tags</span>
      </div>
      <div className={styles.items} onClick={() => nav("/archive")}>
        <span className={styles.icon}>📦</span>
        <span className={styles.text}>Archive</span>
      </div>
      <div className={styles.items} onClick={() => nav("/trash")}>
        <span className={styles.icon}>🗑️</span>
        <span className={styles.text}>Trash</span>
      </div>
    </div>
  );
}

export default Sidebar;
