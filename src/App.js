  import React from "react";
  import "./App.css"
  import {Route,BrowserRouter} from "react-router-dom";
  import MainPage from "./Components/MainPage/MainPage";
  import Header from "./Components/Header/Header";
  import Slider from "./Components/Slider/Slider";
  import {connect} from "react-redux";
  import REDUX from "./redux/";
  import axios from "axios";

  const mapStateToProps = (state) => ({
      images: state.images
  });

  const mapDispatchToProps = (dispatch) => ({
      setImages(images) {
          dispatch(REDUX.Actions.setImages(images));
      }
  });

  class App  extends  React.Component {
      componentDidMount() {
          axios.get("http://testimages.osora.ru:86/").then((response) => {
              if (response && response.data){
                  this.props.setImages(response.data);
              }
          });
      }
      render() {
          return(
              <BrowserRouter>
                  <div>
                      <div className="header">
                          <Header />
                      </div>
                      <div className="container">
                          <Route path="/slider" component={Slider}/>
                          <Route exact path="/" component={MainPage} />
                      </div>
                  </div>
              </BrowserRouter>
          )
      }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(App);
