import React from 'react';
import s from './MainPage.module.css';

const MainPage =(props)=>{

    return(
        <div className={s.slider}>
            <h1>Main Page</h1>
            <a href="/slider">Slider</a>
        </div>
    );
}
export default MainPage;