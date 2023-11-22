import styles from "./Home.module.css";
import { useAppSelector } from "../../hooks/redux";
function Home() {
  const curMenu = useAppSelector((state) => state.menu);
  console.log(curMenu);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <span>Home</span>
        <button>새로운 메모</button>
      </header>
    </div>
  );
}

export default Home;
