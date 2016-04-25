import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux';
import exampleReduder from './exampleReducer';

export default combineReducers({
    routing: routerReducer,
    example: exampleReduder
});
