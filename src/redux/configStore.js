import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyUserReducer } from './Reducers/QuanLyUserReducer';


const rootReducers = combineReducers({
    QuanLyUserReducer

});
export const store = createStore(rootReducers, applyMiddleware(thunk));
