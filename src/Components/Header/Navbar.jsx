import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';
const Navbar =(props)=>{
    return(
    <div className={s.headerNav}>
            <NavLink  to='/'  className={s.nav__item}>MainPage</NavLink>
            <NavLink  to='/slider'  className={s.nav__item}>Slider</NavLink>
     </div>
    )
}
export default Navbar;