import styles from "./Sidebar.module.css";

function Sidebar() {
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
        <div className={styles.items} key={index}>
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.text}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
