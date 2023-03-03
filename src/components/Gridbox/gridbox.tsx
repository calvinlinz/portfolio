import { Url } from "next/dist/shared/lib/router/router";
import { title } from "process";
import { FC, ImgHTMLAttributes } from "react";
import styles from "./gridbox.module.css";

export type ImageSource = {
  title: string,
  source: string
  link: string
  description: string
}

const GridBox : FC<ImageSource> = ({source, link, description,title}) => {
  return (
    <div className={styles.gridBox}>
      <div className={styles.square}>
        <img src={source}></img>
      </div>
      <div className={styles.gridBoxBottom}>
        <div className ={styles.gridBoxBottomHeader}>
        <h2>{title}</h2>
        <button onClick={()=>window.open(link)}>Learn More</button>
        </div>
        <div className={styles.information}>
          <a>{description}</a>
        </div>
      </div>
    </div>
  );
}


export default GridBox