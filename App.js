import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
} from 'react-native';

import Form from './app/components/Form';

export default class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
        <ImageBackground style={styles.container} source={require('./app/img/bg.jpg')}>
          <Text style={styles.header}>Login</Text>
          <Form/>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignSelf: 'stretch',
    flex: 1,
    width: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 38,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 80,
  },
});
