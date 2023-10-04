import styles from './styles.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h4>Sitemap</h4>
                <ul>
                    <li>Home</li>
                    <li>Post</li>
                    <li>About</li>
                </ul>
            </div>
            <div className={styles.column}>
                <h4>Conéctate con nosotros</h4>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Tik tok</li>
                </ul>
            </div>
            <div className={styles.column}>
                <img src="next.svg" alt="test" className='dark:invert' width={100} height={24} />
                
            </div>
            <div className={styles.column}>
                <img src='./vercel.svg' alt='test'className="dark:invert" width={100} height={24}/>
            
            </div>
            <div className={styles.column}>
                <img src="./img/img1.jpg" alt="test" />
            </div>
        </footer>
    );
};


export default Footer;