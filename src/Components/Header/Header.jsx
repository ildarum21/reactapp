  import React from 'react';
  import s from './Header.module.css';
  import Navbar from './Navbar';

  const Header =(props)=>{
     return(
        <div className={s.header}>
             <div className={s.header__logo}>
                  HEADER LOGO
              </div>
            < Navbar />  
          </div>
          );
  }
  export default Header;