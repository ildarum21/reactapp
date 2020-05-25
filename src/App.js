  import React from 'react';
  import './App.css'
  import {Route,BrowserRouter} from 'react-router-dom';
  import MainPage from './Components/MainPage/MainPage';
  import Header from './Components/Header/Header';
  import SliderContainer from './Components/Slider/SliderContainer';
  import SliderMenu from './Components/Slider/SliderMenu';

  
  
  function App(props) {
    return (
      <BrowserRouter>
         <div>
             <div className='Header'>
                <Header />
            </div>
             <div className="container">    
                <Route path='/slider' component={SliderMenu}/>
                <Route  exact path='/' component={MainPage}/>   
             </div>
          </div>
      </BrowserRouter>
    );
  }
  
  export default App;
