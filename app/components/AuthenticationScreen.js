import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import {
	View,
} from 'react-native';


export default class AuthenticationScreen extends Component {
  
  render() {
    return(
      <View>
        <FormLabel>Email</FormLabel>
        <FormInput keyboardType={'default'}/>
        <FormLabel>Password</FormLabel>
        <FormInput keyboardType={'default'}/>
        <FormLabel>Confirm Password</FormLabel>
        <FormInput keyboardType={'default'}/>
      </View>
    );
  }
}
