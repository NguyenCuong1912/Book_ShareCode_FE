import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { QuanLyUserReducer } from './Reducers/QuanLyUserReducer';
import { QuanLyCategoryReducer } from './Reducers/QuanLyCategoryReducer';


const rootReducers = combineReducers({
    QuanLyUserReducer,
    QuanLyCategoryReducer

});
export const store = createStore(rootReducers, applyMiddleware(thunk));
