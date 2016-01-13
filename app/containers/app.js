'use strict';

import React, {
  Component,
  StyleSheet
} from 'react-native';
import TodoList from '../containers/todoList'
import store from '../store'
import {Provider} from 'react-redux/native'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {() => <TodoList />}
      </Provider>
    )
  }
}
