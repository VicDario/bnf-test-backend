import logo from '../../assets/slack_logo.png';
import styles from './Header.module.css';

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt="Slack" className={styles.logo} />
                <nav className={styles.navbar}>
                    <ul>
                        <li>Features</li>
                        <li>Solutions</li>
                        <li>Enterprise</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>    
                </nav>
            </div>
            <div className={styles.right}>
                <a href="#" className='button text-black'>Sign in</a>
                <a href="#" className='button button-white font-upper font-bold'>Talk To Sales</a>
                <a href="#" className='button button-purple font-upper font-bold'>Try for free</a>
            </div>
        </header>
    )
}

export default Header;