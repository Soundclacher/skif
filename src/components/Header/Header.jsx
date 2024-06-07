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
    if (location.pathname  == '/')  {
      window.addEventListener('scroll', () => {
        if (window.scrollY  >  80) {
          setScroll(true);
        } else {
          setScroll(false);
        }    
      })
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
