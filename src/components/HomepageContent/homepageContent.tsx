import styles from './homepageContent.module.css'
import HomepageCarousel from './HomepageCarousel/homepageCarousel'
import HomepageHeader from './HomepageHeader/homepageheader'


export default function HomepageContent(){
    return (
        <div className={styles.content}>
            <HomepageHeader/>
            <HomepageCarousel/>
        </div>
    )
}