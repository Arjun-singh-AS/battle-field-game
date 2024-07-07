import styles from './Sidebar.module.css';

import Game1 from '../assets/game1.png';
import Game2 from '../assets/game2.png';
import Game3 from '../assets/game3.png';
import Game4 from '../assets/game4.png';
import Game5 from '../assets/game5.png';
import Watch from '../assets/watch.png';
import News from '../assets/news.png';
import Help from '../assets/help.png';
import Quit from '../assets/quit.png';

const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imagesDiv}>
                <div className={styles.imgDiv}>
                    <img src={Game1} alt='game1' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={Game2} alt='game2' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={Game3} alt='game3' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={Game4} alt='game4' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={Game5} alt='game5' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={Watch} alt='watch' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={News} alt='news' />
                </div>
                <div className={`${styles.imgDiv} ${styles.help}`}>
                    <img src={Help} alt='help' />
                </div>
                <div className={styles.imgDiv}>
                    <img src={Quit} alt='quit' />
                </div>
            </div>
            <div className={styles.lineDiv}>
            </div>
        </div>
    )
}

export default Sidebar;
