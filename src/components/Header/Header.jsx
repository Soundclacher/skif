import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import styles from './header.module.css'
import Menu  from  '../Menu/Menu';

const Header = () => {

  const [scroll, setScroll] =  React.useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname  !== '/') {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [location.pathname]);


  useEffect(()  =>  {
    console.log(location.pathname)
    if (location.pathname  == '/')  {
      const scrollHandler = () => {
        if (window.scrollY  >  80) {
          setScroll(true);
        } else {
          setScroll(false);
        }    
      }
      window.addEventListener('scroll', scrollHandler)
      return ()  =>  window.removeEventListener('scroll',  scrollHandler)
    }

  }, [location.pathname, window.scrollY])
  




  return (
    <header className={`${styles.header} ${scroll ? styles.scroll : ''}`} >
      <Logo  scroll={scroll} />
        
      <Menu scroll={scroll} />
    </header>


  )
}

export default Header;
