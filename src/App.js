import React from 'react';
import {Route,BrowserRouter} from 'react-router-dom';
import './App.css';
import Slider from './Components/Slider/slider';
import MainPage from './Components/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
            <Route path='/slider' render={()=><Slider/>}/>
            <Route  exact path='/' render={()=><MainPage/>}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
