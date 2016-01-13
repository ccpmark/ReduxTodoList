'use strict';

import React, {
  Component,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ListView
} from 'react-native';
import Todo from '../components/todo'
import {connect} from 'react-redux/native'
import * as todoActions from '../actions/creators/todoCreator'

class TodoList extends Component {
  constructor() {
    super();
    this.state = {text: ''};
  }
  componentDidMount() {

  }

  addTodo(text) {
    var {dispatch} = this.props;
    dispatch(todoActions.addTodo(text))
  }

  render() {
    var rows = this.props.todoState.todos.map((todoItem, index) => {
      return (
        <View key={index}>
          <Text>{todoItem.text} {index}</Text>
        </View>
      )
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.addTodo('button click')}>

          <View style={{width: 150, height: 100, backgroundColor: '#E4F4FA'}}>
            <Text style={styles.button}>Button</Text>
          </View>

        </TouchableOpacity>

      <Text style={styles.welcome}>
      </Text>

      {rows}

      <Text style={styles.instructions}>
      To get started, edit index.android.js
      </Text>
      <Text style={styles.instructions}>
      Shake or press menu button for dev menu
      </Text>

      <TextInput
        value={this.state.text}
        placeholder="Enter a new todo"
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => {
          this.setState({text: text})
        }}
        onSubmitEditing={() => {this.addTodo(this.state.text)}} />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  button: {
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default connect(state => ({
  todoState: state.todoState
}))(TodoList)
