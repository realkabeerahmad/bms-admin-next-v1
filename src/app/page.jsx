import Bubble from "@/components/bubble/bubble";
import styles from "./styles/home.module.css";

const portfolioData = {
  name: "Kabeer Ahmad",
  specialty: "Full Stack Engineer",
};

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          Hi, I'm <span className={styles.name}>{portfolioData.name}</span>
        </h1>
        <p>{portfolioData.specialty}</p>
      </header>
      {/* Add bubbles with specific sizes and positions */}
      <Bubble size={80} top={20} left={30} content="REACT" />
      <Bubble size={100} top={50} left={70} content="NEXT" />
      <Bubble size={60} top={60} left={10} content="JS" />
      <Bubble size={50} top={30} left={85} content="</>" />
      <Bubble size={70} top={10} left={50} content="NODE" />
    </div>
  );
};

export default Home;
