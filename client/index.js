import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import RootContainer from './containers/RootContainer';
import IndexContainer from './containers/IndexContainer';
import StamContainer from './containers/StamContainer';
import configureStore from './store/configure-store';
import styles from './styles.js';
import config from './config';

let initialState = {};
const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={RootContainer}>
                <IndexRoute component={IndexContainer} />
                <Route path="/stam" component={StamContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);