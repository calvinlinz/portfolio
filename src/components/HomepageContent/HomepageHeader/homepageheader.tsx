import styles from "./homepageheader.module.css";
import Image from 'next/image'

export default function HomepageHeader() {
  return (
    <div className={styles.homepageHeader}>
      <div className={styles.headerContents}>
        <div className={styles.header}>
          <h1>full stack developer</h1>
          <a>welcome to my portfolio website</a>
        </div>
        <div className={styles.photo}>
          <Image
            src="/selfie.jpg"
            alt="selfie"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.description}>
          <a>calvin li</a>
        </div>
      </div>
    </div>
  );
}
