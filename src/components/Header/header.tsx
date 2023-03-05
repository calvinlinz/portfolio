import Link from "next/link"
import styles from './header.module.css'

export default function Header(){
    return (
        <div className = {styles.navBar}>
            <nav className = {styles.nav}>
                <div className = {styles.navBarHead}>
                    <Link href = "/">calvin li&apos;s portfolio</Link>
                </div>
                <div className = {styles.navBarLinks}>
                    <ul className = {styles.ul}>
                        <li className={styles.menuItem}><a href ="https://www.linkedin.com/in/calvinlinz/">linkedin</a></li>
                        <li className={styles.menuItem}><a href ="https://github.com/calvinlinz">github</a></li>
                        <li className={styles.menuItem}><a href ="/Calvin_Li_cv.pdf">resume</a></li>
                    </ul>
                </div>
                <div className = {styles.navBarEmail}>
                    <a href="mailto: callvinlinz@gmail.com">callvinlinz@gmail.com</a>
                </div>
            </nav>
        </div>
    )
}