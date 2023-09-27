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
                <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <img className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert" src="/next.svg" alt="Next.js Logo" width={100}
          height={24} />
      </div>
            </div>
            <div className={styles.column}>
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
                <img src="./vercel.svg" alt="Vercel Logo" className="dark:invert" width={100} height={24} />
            </a>
        </div>
            </div>
            <div className={styles.column}>
                <img src="./img/img1.jpg" alt="test" />
            </div>
        </footer>
    );
};


export default Footer;