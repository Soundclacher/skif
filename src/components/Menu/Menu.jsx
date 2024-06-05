import React from 'react';
import styles from './menu.module.css';
import MenuItem from './MenuItem/MenuItem';
import WriteIcon from './icons/write_us.svg'
import DocsIcon from './icons/docs.svg';
import MapIcon from './icons/map.svg';
import GalleryIcon from './icons/gallery.svg';

const items = [
  {
    link: '/gallery',
    logo: GalleryIcon,
    text: 'Галлерея' 
  },
  {
    link: '/map',
    logo: MapIcon,
    text: 'Мы на карте' 
  },
  {
    link: 'news',
    logo: DocsIcon,
    text: 'Новости' 
  },
  {
    link: '/',
    logo: WriteIcon,
    text: 'Главная' 
  },
];

const Menu = () => {
  
  const layout = items.map((item) => {
    return <MenuItem {...item} key={item.link} />;
  })
  
  return (
    <nav className={styles.nav}>
      {layout}
    </nav>
  )
}

export default Menu;
