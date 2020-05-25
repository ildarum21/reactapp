import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import {createStore} from "redux";
import REDUX from "./redux/";

class Wrapper extends React.Component {
    constructor(props){
        super(props);
        this.store = createStore(REDUX.Reducers,REDUX.InitialState);
    }
    render() {
        return(
            <Provider store={this.store}>
                <App />
            </Provider>
        );
    }
}
ReactDOM.render(
    <React.StrictMode>
        <Wrapper />
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
