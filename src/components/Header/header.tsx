import Link from "next/link"
import styles from './header.module.css'

export default function Header(){
    return (
        <div className = {styles.navBar}>
            <nav className = {styles.nav}>
                <div className = {styles.navBarHead}>
                    <Link href = "/">calvin li's portfolio</Link>
                </div>
                <div className = {styles.navBarLinks}>
                    <ul className = {styles.ul}>
                        <li><Link href ="https://crosshair.netlify.app">projects</Link></li>
                        <li><Link href ="/">resume</Link></li>
                        <li><Link href ="/">contact me</Link></li>
                    </ul>
                </div>
                <div className = {styles.navBarEmail}>
                    <a href="callvinlinz@gmail.com">callvinlinz@gmail.com</a>
                </div>
            </nav>
        </div>
    )
}