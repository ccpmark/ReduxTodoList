'use strict';
``
import React, {
  Component,
  PropTypes,
  View,
  Text
} from 'react-native';

export default class Todo extends Component {
  render() {
    return (
      <View key={this.props.index}>
        <Text
          onPress={this.props.onClick}
          style={{
            color: (this.props.completed ? 'red' : 'black')
          }}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired
}
