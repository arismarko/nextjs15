import Link from "next/link";
import styles from "./Navigation.module.css";

type Link = {
    url: string;
    label: string;
}

interface NavigationProps {
    links?: Link[]
}

const Navigation = ({
}: NavigationProps) => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/experience">Experience</Link></li>
                <li><Link href="/projecrt">Projects</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
            </ul>
        </nav>
    )
       
}

export default Navigation;