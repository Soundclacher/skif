import React from 'react';
import styles from './Footer.module.css';
import vkicon from './vk.svg';
import tgicon from './tg.svg';

const Footer = () => {
    return (
        <div className={styles.bottom}>
            <div className={styles.links}>
                <p>Возникли вопросы? Напиши нам:</p>
                <a href='https://vk.com'>
                    <img src={vkicon} alt="" />
                </a>
                <a href='https://t.me'>
                    <img src={tgicon} alt="" />
                </a>
            </div>

            <p className={styles.phone}>Тел. (918) 753-49-24</p>

        </div>
    );
}

export default Footer;