import {SliderReduser} from './slider-reducer';
import {createStore, combineReducers} from 'redux';

let reducers = combineReducers({
    SliderPage:SliderReduser
})
let store =createStore(reducers);
window.store=store;


export default store;
