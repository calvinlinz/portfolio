import styles from "./homepageheader.module.css";

export default function HomepageHeader() {
  return (
    <div className={styles.homepageHeader}>
      <div className={styles.header}>
        <h1>full stack developer</h1>
        <a>welcome to my portfolio website</a>
      </div>
      <div className={styles.photo}>
        <img src="/selfie.jpg"></img>
      </div>
      <div className={styles.description}>
        <a>calvin li</a>
      </div>
    </div>
  );
}
