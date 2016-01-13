'use strict';

import todoState from './todoReducer'
import {combineReducers} from 'redux'

const reducers = combineReducers({
  todoState,
});

export default reducers;
