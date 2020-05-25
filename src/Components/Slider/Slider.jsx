  import React from "react";
  import "./slider.css";
  import REDUX from "../../redux";
  import {connect} from "react-redux";
  import  LocalImages from "../../images/Localimages";

  const mapStateToProps=(state)=>({
      images:state.images
  });
  const mapDispatchToProps =(dispatch)=>({
      setImage(images){
          dispatch(REDUX.Reducers.setImages(images));
      }
  });

  class SliderMenu extends React.Component{
      state={
          isLocal:true,
          count:0
      };
      prev = () => this.changeSlide(this.state.count-1);

      next = () => this.changeSlide(this.state.count+1);

      changeSlide = (count) => {
          let images = this.getImage();
          if (count < 0) count =0;
          else if ( count > images.length - 1) count = images.length -1;
          this.setState({count});
      };
      getLocalImages = () => (Localimages ? Localimages : []);

      getRemoteImages = () =>(this.props.images ? this.props.images : []);

      getImages = (count =-1) => {
          let images = this.state.isLocal
          ? this.getLocalImages()
          : this.getRemoteImages();

       if (count === -1) return images;
       return images[count];
      };
      onChangeChecked = (e) =>{
          //todo
      };
      render(){
          return(
              <div className="sliderMenu">
                  <h1>Slider</h1>
                  <img
                      className="image"
                      src={this.getImages(this.state.count)}
                      alt=""
                  />
                  <div className="SliderArrow" onClick ={this.prev}>
                      &larr;
                  </div>
                  <div className="SliderArrow" onClick ={this.prev}>
                      &rarr;
                  </div>
                  <div className="switch">
                      isLocal
                      <input
                          onChange={this.onChangeChecked}
                          type="checkbox"
                          checked={this.state.isLocal}
                      />
                  </div>
              </div>
          )

      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(SliderMenu);
