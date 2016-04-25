import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import logger from '../middleware/logger';
import rootReducer from '../reducers/rootReducer';

export default function configureStore(initialState) {

    const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        logger,
        routerMiddleware(browserHistory)
    )(create);

    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers/rootReducer.js', () => {
            const nextReducer = require('../reducers/rootReducer.js');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}