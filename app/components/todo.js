'use strict';

import React, {Component} from 'react-native';

export default class Todo extends Component {
  render() {
    return (
      <li>
        {this.props.name}
      </li>
    )
  }
}
