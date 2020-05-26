  import React from 'react';
  import './slider.css';
  import { LocalImages } from '../../images/LocalImages';
  import Slider from './slider';



  let Images =LocalImages.map(item=><img alt='slider' src={item} className='slide'/>);

  let ActiveSlide =0;
  let LastSlide = 0;
  let images;
  let slider;

  class SliderMenu extends React.Component{

    componentDidMount(){
      slider=document.querySelector('.slider');
      debugger;
      images  =slider.children;
      console.log(images);
      debugger;
      slider.firstChild.classList.add('activeSlide');
      debugger;
    }
    NextSlide (){
      LastSlide=ActiveSlide;
      if (ActiveSlide==images.length-1){
          ActiveSlide=0;
      }
      else{
          ActiveSlide++;
      }
      this.ChangeSlide(LastSlide,ActiveSlide)
    }

     PrevSlide (){
      LastSlide=ActiveSlide;
      if (ActiveSlide==0){
          ActiveSlide=images.length-1;
      }
      else{
          ActiveSlide--;
      }
      this.ChangeSlide(LastSlide,ActiveSlide)
    }

    ChangeSlide (NumberOfLastSlide,NumberOfActiveSlide){
      images[NumberOfLastSlide].classList.remove('activeSlide');
      images[NumberOfLastSlide].classList.add('slide');
      images[NumberOfActiveSlide].classList.remove('slide');
      images[NumberOfActiveSlide].classList.add('activeSlide');
    }
    render(){
        return(
            <div className='sliderMenu'>
                 <h1>Slider</h1>
                  <Slider Image={Images}/>
                  <a href="#" className="SliderArrow" onClick={()=>this.PrevSlide()}>&larr;</a>   
                  <a href="#" className="SliderArrow" onClick={()=>this.NextSlide()}>&rarr;</a> 
               <div className="switch">
                  <input type="checkbox"/>
              </div>
            </div>
        
  
        )}
  }

  






  export default SliderMenu;
