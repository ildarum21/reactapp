  import ReduxImage from '../api/ImagesAPI.js';

  const TOGGLE_LOCAL_MODE='TOGGLE_LOCAL_MODE';
  
  let InitialState ={     
      ReduxImage,
      tuggleMode:false
  }
  export const SliderReduser=(state=InitialState,action)=>{
      switch (action.type){
          case TOGGLE_LOCAL_MODE:{
            return{
                ...state.tuggleMode=true?false:true
            } 
          }
          default:
              return state
      }
  }
  export const toggleLocalMode =()=>{
    return{
        type:TOGGLE_LOCAL_MODE
    }

  }


  