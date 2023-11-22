import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const nav = useNavigate();
  const menuItems = [
    { icon: "📝", text: "Notes" },
    { icon: "💻", text: "Coding" },
    { icon: "🏋️", text: "Exercise" },
    { icon: "✒️", text: "Quotes" },
    { icon: "✏️", text: "Edit Notes" },
    { icon: "📦", text: "Archive" },
    { icon: "🗑️", text: "Trash" },
  ];
  return (
    <div className={styles.sidebarContainer}>
      <h1>Keep</h1>
      {menuItems.map((item, index) => (
        <div
          onClick={() => nav(`/${item.text}`)}
          className={styles.items}
          key={index}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
