import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './ServerInfo.module.css';

import Back from '../assets/back.png';
import GermanFlag from '../assets/germany-flag.png';
import Favorite from '../assets/favorite.png';
import Favorite2 from '../assets/favorite2.png';


const ServerInfo = () => {

    const [settings, setSettings] = useState({});
    const [advanced, setAdvanced] = useState({});
    const [rules, setRules] = useState({});

    const getServerInfo = async () => {
        const res = await axios.get('http://localhost:4000/api/serverinfo/getInfo');
        const { info } = res.data;
        setSettings(info.settings);
        setAdvanced(info.advanced);
        setRules(info.rules);
    }

    useEffect(() => {
        const lastBtn = document.getElementsByClassName(`${styles.lastBtn}`)[0];
        const img = lastBtn.querySelector('img');

        if (img) {
            const originalSrc = img.src;
            const hoverSrc = Favorite2;

            lastBtn.addEventListener('mouseenter', () => {
                img.src = hoverSrc;
            });

            lastBtn.addEventListener('mouseleave', () => {
                img.src = originalSrc;
            });
        }

        getServerInfo();
    }, []);


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <pre>
                    <img src={Back} alt='back' width='10px' height='15px' />  MULTIPLAYER  /  SERVER  BROWSER  /
                </pre>
                <span className={styles.serverInfo}>SERVER INFO</span>
            </div>
            <div className={styles.details}>
                <p className={styles.firstPara}>
                    #1| NASA | Noobs Welcome | Conquest 40Hz
                </p>
                <p className={styles.secondPara}>
                    <img src={GermanFlag} alt='german flag' />
                    CONQUEST LARGE - LANCANG DAM - CUSTOM - 60HZ
                </p>
                <p className={styles.thirdPara}>
                    Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord https://discord.gg/3r5NK4d
                </p>
            </div>
            <div className={styles.buttonsDiv}>
                <button>JOIN</button>
                <button>SPECTATE</button>
                <button>JOIN AS COMMANDER</button>
                <button className={styles.lastBtn}>
                    <img src={Favorite} alt='favorite' style={{ width: '18px', height: '18px' }} />
                    <span>13672</span>
                </button>
            </div>
            <div className={styles.numericDiv}>
                <div>
                    <p className={styles.upperPara}>PLAYERS</p>
                    <p className={styles.belowPara}>64/64</p>
                </div>
                <div>
                    <p className={styles.upperPara}>PING</p>
                    <p className={styles.belowPara}>47ms</p>
                </div>
                <div>
                    <p className={styles.upperPara}>TICKRATE</p>
                    <p className={styles.belowPara}>60 Hz</p>
                </div>
            </div>
            <div className={styles.tablesDiv}>
                <div className={styles.columnDiv}>
                    <p className={styles.heading}>SETTINGS</p>
                    {
                        Object.entries(settings)?.map(([key, value], ind) => {
                            return (
                                <>
                                    <p className={styles.row} key={ind}>
                                        <span>{key.toUpperCase()}</span>
                                        <span>{value.toUpperCase()}</span>
                                    </p>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
                <div className={styles.columnDiv}>
                    <p className={styles.heading}>ADVANCED</p>
                    {
                        Object.entries(advanced)?.map(([key, value], ind) => {
                            return (
                                <>
                                    <p className={styles.row} key={ind}>
                                        <span>{key.toUpperCase()}</span>
                                        <span>{value.toUpperCase()}</span>
                                    </p>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
                <div className={styles.columnDiv}>
                    <p className={styles.heading}>RULES</p>
                    {
                        Object.entries(rules)?.map(([key, value], ind) => {
                            return (
                                <>
                                    <p className={styles.row} key={ind}>
                                        <span>{key.toUpperCase()}</span>
                                        <span>{value}</span>
                                    </p>
                                    <hr />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServerInfo;
