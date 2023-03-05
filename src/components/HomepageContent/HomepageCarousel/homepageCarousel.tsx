import GridBox from "@/components/Gridbox/gridbox"
import styles from './homepageCarousel.module.css'
import { ImageSource } from "@/components/Gridbox/gridbox"

export default function HomepageCarousel(){
    let gridBox1 : ImageSource = {
        link :"https://crosshair.netlify.app",
        description :"Valorant crosshair website built on Next.js. Professional player's crosshair settings are retrieved from a json file and is then drawn onto the webpage. Users can also create their own crosshair's dynamically.",
        title : "Crosshair Website",
        source :"/crosshair.png"
    }
    let gridBox2 : ImageSource = {
        link :"/",
        description :"Maybe future project?",
        title : "Weather App",
        source :"/weather.png"
    }
    let gridBox3 : ImageSource = {
        link :"https://postitnotes.netlify.app",
        description :"Full stack web application. Either contribute to the communal board or log in to write notes only you can see. Redux used to store user sessions and data is stored in JSON files. API was created to update and view data. Google API used for authentication. Web app not functional on Netlify as website is statically hosted",
        title : "Post-It Notes",
        source :"/notes.png"
    }

    return (
        <div className={styles.gridContainer}>
            <GridBox {...gridBox1}/>
            <GridBox {...gridBox2}/>
            <GridBox {...gridBox3}/>
        </div>

    )
}