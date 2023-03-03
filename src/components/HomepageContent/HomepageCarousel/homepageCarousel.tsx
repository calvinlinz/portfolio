import GridBox from "@/components/Gridbox/gridbox"
import ImageProp from "@/components/Gridbox/gridbox"
import styles from './HomepageCarousel.module.css'
import { ImageSource } from "@/components/Gridbox/gridbox"




export default function HomepageCarousel(){
    let gridBox1 : ImageSource = {
        link :"https://crosshair.netlify.app",
        description :"Valorant crosshair website built on Next.js. Professional player's crosshair settings are retrieved from a json file and is then drawn onto the webpage. Users can also create their own crosshair's dynamically.",
        title : "Crosshair Website",
        source :"/crosshair.png"
    }
    let gridBox2 : ImageSource = {
        link :"https://crosshair.netlify.app",
        description :"test",
        title : "Crosshair Website",
        source :"/selfie.jpg"
    }
    let gridBox3 : ImageSource = {
        link :"https://crosshair.netlify.app",
        description :"test",
        title : "Crosshair Website",
        source :"/selfie.jpg"
    }

    return (
        <div className={styles.gridContainer}>
            <GridBox {...gridBox1}/>
            <GridBox {...gridBox2}/>
            <GridBox {...gridBox3}/>
        </div>

    )
}