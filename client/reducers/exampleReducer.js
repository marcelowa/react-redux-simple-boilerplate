import _ from 'lodash';
import { handleActions } from 'redux-actions';

const initialState = {
    name: ''
};

export default handleActions({
    ACTION_EXAMPLE (state, action) {
        return _.assign({}, state, action);
    }

}, initialState)
