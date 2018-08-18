import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          placeholder='Username'
          style={styles.textInput}
          underlineColorAndroid={'transparent'}/>
        <TextInput
          placeholder='Password'
          secureTextEntry={true}
          style={styles.textInput}
          underlineColorAndroid={'transparent'}/>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Log in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: 'stretch',
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: '#292929',
    alignItems: 'center',
    padding: 20,
  },
  btntext: {
    color: '#fff',
    fontSize: 18,
  },
});