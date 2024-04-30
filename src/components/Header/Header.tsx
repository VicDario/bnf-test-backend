import logo from '../../assets/slack_logo.png';
import styles from './Header.module.css';
import { FaChevronDown, FaSearch } from "react-icons/fa";

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt="Slack" className={styles.logo} />
                <nav className={styles.navbar}>
                    <ul>
                        <li>Features <FaChevronDown /></li>
                        <li>Solutions <FaChevronDown /></li>
                        <li>Enterprise</li>
                        <li>Resources <FaChevronDown /></li>
                        <li>Pricing</li>
                    </ul>    
                </nav>
            </div>
            <div className={styles.right}>
                <span><FaSearch /></span>
                <a href="#" className='text-black text-without-decoration'>Sign in</a>
                <a href="#" className='button button-white'>Talk To Sales</a>
                <a href="#" className='button button-purple'>Try for free</a>
            </div>
        </header>
    )
}

export default Header;