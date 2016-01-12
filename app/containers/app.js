'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View} from 'react-native';

  export default class App extends Component {
    render() {
      return (
        // <View>
        // <Text>
        // Hello
        // </Text>
        // </View>
        <View style={styles.container}>
        <Text style={styles.welcome}>
        Hello world!
        </Text>
        <Text style={styles.instructions}>
        To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
        Shake or press menu button for dev menu
        </Text>
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
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
