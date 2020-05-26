  import React from "react";
  import "./slider.css";
  import REDUX from "../../redux";
  import {connect} from "react-redux";
  import  LocalImages from "../../images/Localimages";
  import {NavLink} from 'react-router-dom';
  const mapStateToProps=(state)=>({
      images:state.images
  });
  const mapDispatchToProps =(dispatch)=>({
      setImage(images){
          dispatch(REDUX.Reducers.setImages(images));
      }
  });

  class SliderMenu extends React.Component{
      state = {
          isLocal:true,
          count:0,
      };
      prev = () => this.changeSlide(this.state.count-1) ;

      next = () => this.changeSlide(this.state.count+1);

      changeSlide = (count) => {
        let images = this.getImages();
          if (count < 0) count =0;
          else if  ( count > images.length - 1) count = images.length -1;
          this.setState({count});
      };

      getLocalImages = () => (LocalImages ? LocalImages : []);

      getRemoteImages = () =>(this.props.images ? this.props.images : []);

      getImages = (count=-1) => {
          let images = this.state.isLocal
          ? this.getLocalImages()
          : this.getRemoteImages();

       if (count === -1) return images;
       return images[count];
      };

      onChangeChecked = (e) => {
          this.setState({isLocal:!this.state.isLocal});
          
      };
      render(){
          return(
              <div> 
                   <NavLink  to='/'  >Back</NavLink>  
                    <div className="sliderMenu">
                        <h1>Slider</h1>
                        <img
                           className="image"
                           src={this.getImages(this.state.count)}
                          alt=""
                        />
                        <div className="arrows">
                             <div className=" SliderArrow SliderArrow_left" onClick ={this.prev}>
                                &larr;
                             </div>

                             <div className="SliderArrow SliderArrow_right" onClick ={this.next}>
                                &rarr;
                             </div>
                        </div>

                        <div className="switch">
                             isLocal
                             <input
                                checked={this.state.isLocal}
                                className ='input'
                                onChange={this.onChangeChecked}
                                type="checkbox"     
                             />
                        </div>
                    </div>
              </div>  
          )

      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SliderMenu);
