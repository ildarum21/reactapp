  import React from 'react';
  import './slider.css';
  import { LocalImages } from '../../images/LocalImages';
  import Slider from './Slider';



  let Images =LocalImages.map(item=><img alt='slider' src={item} className='slide'/>);
  const SliderMenu =(props)=>{
      console.log(props);
      return(
          <div className='sliderMenu'>
               <h1>Slider</h1>
                <Slider Images={Images} />
                <a href="#"     onClick={()=>PrevSlide()}>left</a>   
                <a href="#" onClick={()=>NextSlide()}>right</a> 
             <div className="switch">
                <input type="checkbox"/>
            </div>
          </div>
      );
  }
  let ActiveSlide =0;
  let LastSlide = 0;
  let images;
  let slider;
  window.onload=function(){
      slider=document.querySelector('.slider');

      images  =slider.children;
      
      slider.firstChild.classList.add('active');
      slider.firstChild.classList.remove('slide');
  }

  function NextSlide (){
    LastSlide=ActiveSlide;
    if (ActiveSlide==images.length-1){
        ActiveSlide=0;
    }
    else{
        ActiveSlide++;
    }
    ChangeSlide(LastSlide,ActiveSlide)
  }
  function PrevSlide (){
    LastSlide=ActiveSlide;
    if (ActiveSlide==0){
        ActiveSlide=images.length-1;
    }
    else{
        ActiveSlide--;
    }
    ChangeSlide(LastSlide,ActiveSlide)
  }
  let ChangeSlide =function(NumberOfLastSlide,NumberOfActiveSlide){
    images[NumberOfLastSlide].classList.remove('active');
    images[NumberOfLastSlide].classList.add('slide');
    images[NumberOfActiveSlide].classList.remove('slide');
    images[NumberOfActiveSlide].classList.add('active');
    
  }




  export default SliderMenu;
