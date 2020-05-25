  import React from 'react';
  import './App.css'
  import {Route,BrowserRouter} from 'react-router-dom';
  import SliderMenu from './Components/Slider/SliderMenu';
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
                <Route path='/slider' component={SliderMenu}/>
                <Route  exact path='/' component={MainPage}/>   
             </div>
          </div>
      </BrowserRouter>
    );
  }
  
  export default App;
