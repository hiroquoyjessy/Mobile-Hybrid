import React, {Component} from 'react';
import {
	AppRegistry,
	View
} from 'react-native';
import { Container, Header, Content, Form, Grid, Item, Input, Label, Button, Text } from 'native-base';
import {
	NavigationActions
} from 'react-navigation';
import * as firebase from 'firebase';

export default class AccountInformationsScreen extends Component {

	constructor(props) {
		super(props);
	}

	async signout() {
		try {
				await firebase.auth().signOut()
				console.log('Signed out');
				this.props
               .navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Login'})
                    ]
                  }));
		} catch (e) {
			console.log("Not signed out");
			console.log("In catch");
			console.log(e.toString())
		}
	}

  render(){
    return(
			<Button light onPress={this.signout.bind(this)}>
				<Text>Logout</Text>
			</Button>
    )
  }
}
