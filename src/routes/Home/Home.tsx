import styles from "./Home.module.css";
import { useAppSelector } from "../../hooks/redux";
import Header from "../../layout/Header/Header";
function Home() {
  const curMenu = useAppSelector((state) => state.menu);
  console.log(curMenu);
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}

export default Home;
