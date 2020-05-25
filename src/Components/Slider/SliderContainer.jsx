import React from 'react';
import {connect} from'react-redux';
import SliderMenu from './SliderMenu';
import { toggleLocalMode } from '../../redux/slider-reducer';
 

   const  mapStateToProps=(state)=>{
       return{
        tuggleMode:state.SliderPage.tuggleMode
       }
    }
    const mapDispatchToProps=(dispatch)=>{
        return{
        toggleLocalMode:()=>{
            dispatch(toggleLocalMode())
        }
    }
    }  

const  SliderContainer =connect(mapStateToProps,mapDispatchToProps)(SliderMenu)
export default SliderContainer;
