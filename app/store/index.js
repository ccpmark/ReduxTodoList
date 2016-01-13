'use strict';

import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import createLogger from 'redux-logger';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
const store = createStoreWithMiddleware(reducers);


export default store;
