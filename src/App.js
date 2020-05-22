import React from 'react';
import './App.css'
import {Route,BrowserRouter} from 'react-router-dom';
import Slider from './Components/Slider/slider';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
function App() {
  return (
    <BrowserRouter>
    <div>
    <div className='Header'>
        <Header />
    </div>
    <div className="container">    
            <Route path='/slider' render={()=><Slider/>}/>
            <Route  exact path='/' render={()=><MainPage/>}/>   
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
