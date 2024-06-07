import React from 'react';
import styles from './menu.module.css';
import MenuItem from './MenuItem/MenuItem';
import WriteIcon from './icons/write_us.svg'
import DocsIcon from './icons/docs.svg';
import MapIcon from './icons/map.svg';
import GalleryIcon from './icons/gallery.svg';

const items = [
  {
    link: '/about',
    logo: MapIcon,
    text: 'О нас' 
  },
  {
    link: '/gallery',
    logo: GalleryIcon,
    text: 'Галлерея' 
  },
  {
    link: 'news',
    logo: DocsIcon,
    text: 'Новости' 
  },
  {
    link: '/events',
    logo: WriteIcon,
    text: 'Мероприятия' 
  },
];

const Menu = (props) => {
  
  const layout = items.map((item) => {
    return <MenuItem {...item} key={item.link} scroll={props.scroll} />;
  })
  
  return (
    <nav className={styles.nav}>
      {layout}
    </nav>
  )
}

export default Menu;
